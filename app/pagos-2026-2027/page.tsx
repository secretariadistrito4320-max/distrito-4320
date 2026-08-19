'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Building2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Search,
  Download,
  Send,
  Calculator,
  ShieldCheck,
  DollarSign,
  Copy,
  Check,
  FileText,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import {
  BANK_DETAILS,
  CLUB_PAYMENTS_2026_2027,
  ClubPaymentStatus
} from '@/data/transparencyData';

export default function PagosTransparenciaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Fee calculator state
  const [calcMembers, setCalcMembers] = useState<number>(30);
  const [calcIncludeInsurance, setCalcIncludeInsurance] = useState<boolean>(true);

  // Receipt submission simulated form
  const [selectedClubForReceipt, setSelectedClubForReceipt] = useState<string>('');
  const [receiptNumber, setReceiptNumber] = useState<string>('');
  const [receiptSenderName, setReceiptSenderName] = useState<string>('');
  const [receiptSentSuccess, setReceiptSentSuccess] = useState<boolean>(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const filteredPayments = useMemo(() => {
    return CLUB_PAYMENTS_2026_2027.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.clubName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.receiptNumber && item.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesStatus =
        statusFilter === 'Todos' ||
        item.semester1Status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  // Totals calculations
  const totalClubs = CLUB_PAYMENTS_2026_2027.length;
  const paidClubs = CLUB_PAYMENTS_2026_2027.filter((c) => c.semester1Status === 'Pagado').length;
  const pendingClubs = totalClubs - paidClubs;
  const complianceRate = Math.round((paidClubs / totalClubs) * 100);

  // Calculator outputs
  const calculatedSemesterTotal = calcMembers * BANK_DETAILS.perCapitaRateSemesterCLP;
  const calculatedInsuranceTotal = calcIncludeInsurance ? calcMembers * BANK_DETAILS.perCapitaInsuranceCLP : 0;
  const calculatedGrandTotal = calculatedSemesterTotal + calculatedInsuranceTotal;

  const handleSubmitReceipt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedClubForReceipt || !receiptSenderName) return;
    setReceiptSentSuccess(true);
  };

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      
      {/* Hero Header */}
      <section className="w-full bg-[#00246C] text-white py-12 sm:py-16 border-b-4 border-[#F7A81B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-bold uppercase tracking-wider mb-3">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Portal de Rendición y Cuotas Distritales</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Estado de Pagos y Transparencia 2026-2027
              </h1>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Gestión financiera transparente del Distrito 4320. Consulta los aranceles vigentes, datos de transferencia bancaria y el estado de cumplimiento por club.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/transparencia-y-actas"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#F7A81B]" />
                <span>Ver Actas y Balances</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        
        {/* KPI Compliance Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">
                Cumplimiento Semestre 1
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#00246C] block mt-1">
                {complianceRate}%
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold">
                {paidClubs} de {totalClubs} clubes al día
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">
                Cuota Per Cápita Semestral
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#00246C] block mt-1">
                ${BANK_DETAILS.perCapitaRateSemesterCLP.toLocaleString('es-CL')}
              </span>
              <span className="text-[11px] text-slate-500">Por socio activo / semestre</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#00246C] flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">
                Seguro Rotario Anual
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#00246C] block mt-1">
                ${BANK_DETAILS.perCapitaInsuranceCLP.toLocaleString('es-CL')}
              </span>
              <span className="text-[11px] text-slate-500">Cobertura de accidentes rotaria</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-bold uppercase block">
                Plazo Vencimiento 1er Sem.
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block mt-1">
                31 Agosto 2026
              </span>
              <span className="text-[11px] text-amber-600 font-semibold">
                {pendingClubs} clubes pendientes
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* BANK TRANSFER DETAILS & CALCULATOR (2 COLUMNS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Official Bank Account Details Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#00246C] to-[#001744] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900">
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B] text-[#00246C] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Cuenta Bancaria Oficial D4320</span>
              </div>
              <span className="text-xs text-blue-200">RUT Oficial Activo</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Datos para Transferencia Electrónica
            </h3>
            <p className="text-xs text-blue-100 mb-6 leading-relaxed">
              Realiza las transferencias de cuotas distritales y aportes solidarios únicamente a la cuenta corriente institucional del Distrito 4320.
            </p>

            <div className="space-y-3 text-xs">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-blue-300 block text-[10px] uppercase font-bold">Banco:</span>
                  <span className="font-bold text-white text-sm">{BANK_DETAILS.bankName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.bankName, 'banco')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Copiar Banco"
                >
                  {copiedField === 'banco' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-blue-300 block text-[10px] uppercase font-bold">Tipo y N° de Cuenta:</span>
                  <span className="font-bold text-[#F7A81B] text-sm">
                    {BANK_DETAILS.accountType} N° {BANK_DETAILS.accountNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.accountNumber, 'cuenta')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Copiar Número de Cuenta"
                >
                  {copiedField === 'cuenta' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-blue-300 block text-[10px] uppercase font-bold">Titular / Razón Social:</span>
                  <span className="font-bold text-white text-xs sm:text-sm">{BANK_DETAILS.beneficiaryName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.beneficiaryName, 'titular')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Copiar Titular"
                >
                  {copiedField === 'titular' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-blue-300 block text-[10px] uppercase font-bold">RUT Institucional:</span>
                  <span className="font-bold text-white text-sm">{BANK_DETAILS.rut}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.rut, 'rut')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Copiar RUT"
                >
                  {copiedField === 'rut' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-blue-300 block text-[10px] uppercase font-bold">Correo de Envío Comprobante:</span>
                  <span className="font-bold text-[#F7A81B] text-xs sm:text-sm">{BANK_DETAILS.emailReceipt}</span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(BANK_DETAILS.emailReceipt, 'email')}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Copiar Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-5 text-[11px] text-blue-200 text-center">
              ⚠️ En el asunto de la transferencia indica: <strong>[Nombre del Club] - Cuota 1er Semestre 2026-2027</strong>
            </div>
          </div>

          {/* Interactive Fee Calculator & Receipt Upload Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Calculator Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#00246C] font-bold text-sm">
                <Calculator className="w-5 h-5 text-[#F7A81B]" />
                <span>Calculadora de Cuota Distrital para tu Club</span>
              </div>
              <p className="text-xs text-slate-500">
                Calcula instantáneamente el monto a transferir según el número de socios activos de tu club.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Número de Socios Activos:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={calcMembers}
                    onChange={(e) => setCalcMembers(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3 py-2 text-sm font-bold text-[#00246C] bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C]"
                  />
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcIncludeInsurance}
                      onChange={(e) => setCalcIncludeInsurance(e.target.checked)}
                      className="w-4 h-4 rounded text-[#00246C] focus:ring-[#00246C]"
                    />
                    <span>Incluir Seguro Rotario Anual ($3.500/socio)</span>
                  </label>
                </div>
              </div>

              {/* Total Summary Breakdown */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Cuota Distrital ({calcMembers} socios × $18.500):</span>
                  <span className="font-semibold text-slate-900">${calculatedSemesterTotal.toLocaleString('es-CL')} CLP</span>
                </div>
                {calcIncludeInsurance && (
                  <div className="flex justify-between text-slate-600">
                    <span>Seguro Rotario Anual ({calcMembers} socios × $3.500):</span>
                    <span className="font-semibold text-slate-900">${calculatedInsuranceTotal.toLocaleString('es-CL')} CLP</span>
                  </div>
                )}
                <div className="pt-2 border-t border-blue-200 flex justify-between items-center text-sm font-extrabold text-[#00246C]">
                  <span>Total a Transferir:</span>
                  <span className="text-lg text-[#00246C] font-black">${calculatedGrandTotal.toLocaleString('es-CL')} CLP</span>
                </div>
              </div>
            </div>

            {/* Simulated Receipt Submission Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#00246C] font-bold text-sm">
                <Send className="w-5 h-5 text-[#F7A81B]" />
                <span>Notificar Pago / Adjuntar Comprobante</span>
              </div>
              <p className="text-xs text-slate-500">
                Informa a la Tesorería Distrital para actualizar el estado de tu club y emitir el recibo oficial.
              </p>

              {receiptSentSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Comprobante Registrado Exitosamente!</span>
                  </div>
                  <p>
                    La Tesorería Distrital ha recibido la notificación y validará la transferencia en un plazo máximo de 48 horas hábiles.
                  </p>
                  <button
                    type="button"
                    onClick={() => setReceiptSentSuccess(false)}
                    className="text-xs font-bold text-emerald-900 underline pt-1"
                  >
                    Registrar otro comprobante
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitReceipt} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Selecciona tu Club Rotario:</label>
                    <select
                      value={selectedClubForReceipt}
                      onChange={(e) => setSelectedClubForReceipt(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
                    >
                      <option value="">-- Seleccionar Club --</option>
                      {CLUB_PAYMENTS_2026_2027.map((c) => (
                        <option key={c.clubId} value={c.clubId}>
                          {c.clubName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Nombre de quien reporta:</label>
                      <input
                        type="text"
                        placeholder="Ej: Juan Pérez (Tesorero)"
                        value={receiptSenderName}
                        onChange={(e) => setReceiptSenderName(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">N° Comprobante / Operación:</label>
                      <input
                        type="text"
                        placeholder="Ej: TRANSF-89472"
                        value={receiptNumber}
                        onChange={(e) => setReceiptNumber(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Adjuntar Archivo (PDF o Imagen):</label>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 text-xs file:mr-3 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#00246C] file:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#00246C] hover:bg-blue-900 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#F7A81B]" />
                    <span>Enviar Notificación a Tesorería Distrital</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* CLUB PAYMENT STATUS TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Nómina Oficial de Cumplimiento por Club · Periodo 2026-2027
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Estado semestral auditado por la Tesorería y Secretaría del Distrito 4320.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-2">
              {['Todos', 'Pagado', 'Pendiente'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    statusFilter === status
                      ? 'bg-[#00246C] text-[#F7A81B]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar inside table card */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Buscar club, zona o recibo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00246C] text-slate-800"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Club Rotario</th>
                  <th className="py-3.5 px-4">Zona</th>
                  <th className="py-3.5 px-4 text-center">Socios</th>
                  <th className="py-3.5 px-4">1er Semestre (Jul-Dic)</th>
                  <th className="py-3.5 px-4">Monto Cuota</th>
                  <th className="py-3.5 px-4">2do Semestre (Ene-Jun)</th>
                  <th className="py-3.5 px-4">N° Recibo / Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredPayments.map((item) => {
                  const isS1Paid = item.semester1Status === 'Pagado';
                  return (
                    <tr key={item.clubId} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#00246C]">
                        <Link href={`/clubes/${item.clubId}`} className="hover:underline">
                          {item.clubName}
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 font-medium">
                        {item.zone}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-slate-800">
                        {item.activeMembers}
                      </td>
                      <td className="py-3.5 px-4">
                        {isS1Paid ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Pagado
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-[11px]">
                            <Clock className="w-3 h-3 text-amber-600" />
                            Pendiente
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        ${item.semester1Amount.toLocaleString('es-CL')}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium text-[11px]">
                          {item.semester2Status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 text-[11px]">
                        {item.receiptNumber ? (
                          <div>
                            <span className="font-bold text-[#00246C] block">{item.receiptNumber}</span>
                            <span className="text-[10px] text-slate-400">{item.lastPaymentDate}</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">En espera de comprobante</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
