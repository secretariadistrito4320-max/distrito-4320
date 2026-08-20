export const SHEETS_API_URL =
  'https://script.google.com/macros/s/AKfycbyB2VdT6qYPNcEAmlrAMWpgpd9LObcTAk0imjRMsI6W3-ChCegRi31w_B1WoZpxW5va/exec';

export interface EGDItem {
  period: string;
  name: string;
  club: string;
  phone?: string;
  email?: string;
  status?: string;
  obs?: string;
  photoUrl?: string;
}

export const FALLBACK_EGD_LIST: EGDItem[] = [
  { period: "1923–1927", name: "Percival Coates", club: "R.C. Montevideo", obs: "Q.E.P.D." },
  { period: "1927–1928", name: "Eduardo Moore Bravo", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1928–1929", name: "Joaquín Lepeley Contreras", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1929–1930", name: "Francisco Mardones Otayza", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1930–1931", name: "Víctor Ide Schulz", club: "R.C. Osorno", obs: "Q.E.P.D." },
  { period: "1931–1932", name: "Manuel Gaete Fagalde", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1932–1933", name: "Eduardo Moore Bravo", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1933–1934", name: "Guillermo Munnich Thile", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1934–1935", name: "Luis Calvo Mackenna", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1935–1936", name: "Luis Calvo Mackenna", club: "R.C. Santiago", obs: "Q.E.P.D." },
  { period: "1936–1937", name: "Juan Manuel Valle Ferreira", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1937–1938", name: "Julio Araos Díaz", club: "R.C. Iquique", obs: "Q.E.P.D." },
  { period: "1938–1939", name: "Luis Gajardo Guerrero", club: "R.C. San Felipe", obs: "Q.E.P.D." },
  { period: "1939–1940", name: "Federico Carvallo de la Fuente", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1940–1941", name: "Hugo Enríquez Fröden", club: "R.C. Ovalle", obs: "Q.E.P.D." },
  { period: "1941–1942", name: "Hernán Ringeling de Rurange", club: "R.C. Quilpué", obs: "Q.E.P.D." },
  { period: "1942–1943", name: "Alberto Barboza Baeza", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1943–1944", name: "Guillermo Ortega Yañez", club: "R.C. Arica", obs: "Q.E.P.D." },
  { period: "1944–1945", name: "Alejandro Vásquez Armijo", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1945–1946", name: "Bernardo Salas Muñoz", club: "R.C. Los Andes", obs: "Q.E.P.D." },
  { period: "1946–1947", name: "Ricardo Montero Letelier", club: "R.C. Iquique", obs: "Q.E.P.D." },
  { period: "1947–1948", name: "Gastón Ossa Saint Marie", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1948–1949", name: "Luis E. Arancibia Arancibia", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1949–1950", name: "Alfredo Betteley Melosi", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1950–1951", name: "Juan de Dios Carmona Alcayaga", club: "R.C. Antofagasta", obs: "Q.E.P.D." },
  { period: "1951–1952", name: "Hugo Jordán Guerra", club: "R.C. Los Andes", obs: "Q.E.P.D." },
  { period: "1952–1953", name: "Enrique Vicente Vicente", club: "R.C. Viña del Mar", obs: "Q.E.P.D." },
  { period: "1953–1954", name: "Adolfo Menke Utschink", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1954–1955", name: "Tomás Ivanovic Ivanovic", club: "R.C. Tocopilla", obs: "Q.E.P.D." },
  { period: "1955–1956", name: "Santiago Peña Sangonia", club: "R.C. La Serena", obs: "Q.E.P.D." },
  { period: "1956–1957", name: "Ramón López Vargas", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1957–1958", name: "Olaf Olsen Provist", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1958–1959", name: "Mario Gutiérrez Gutiérrez", club: "R.C. Copiapó", obs: "Q.E.P.D." },
  { period: "1959–1960", name: "Oscar Hucke Perin", club: "R.C. Coquimbo", obs: "Q.E.P.D." },
  { period: "1960–1961", name: "Miguel A. Concha Muñoz", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1961–1962", name: "Luis Guevara Ortuzar", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1962–1963", name: "Hernán Vera Patiño", club: "R.C. Chuquicamata", obs: "Q.E.P.D." },
  { period: "1963–1964", name: "Luis Vacher Rojas", club: "R.C. Ovalle", obs: "Q.E.P.D." },
  { period: "1964–1965", name: "Gonzalo Garcia Valenzuela", club: "R.C. Villa Alemana", phone: "+56 9 98958411", email: "ggarciav@vtr.net" },
  { period: "1965–1966", name: "Rolando Onetto Sobino", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1966–1967", name: "Edmundo Ziede Abud", club: "R.C. Antofagasta", obs: "Q.E.P.D." },
  { period: "1967–1968", name: "Raúl Bitrán Nachary", club: "R.C. La Serena", obs: "Q.E.P.D." },
  { period: "1968–1969", name: "Julio Haydn Córdova", club: "R.C. Playa Ancha", obs: "Q.E.P.D." },
  { period: "1969–1970", name: "Kenneth Faille Arthe", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1970–1971", name: "Eduardo Hoyos Rios", club: "R.C. Arica", obs: "Socio Honorario Concordia" },
  { period: "1971–1972", name: "Heriberto Lansberger Prado", club: "R.C. La Serena", obs: "Q.E.P.D." },
  { period: "1972–1973", name: "Elias Sepúlveda Veloso", club: "R.C. La Calera", obs: "Q.E.P.D." },
  { period: "1973–1974", name: "Héctor Radrigán Roco", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1974–1975", name: "Francisco Díaz Muñoz", club: "R.C. Arica", obs: "Socio Honorario Arica" },
  { period: "1975–1976", name: "Oscar Alvarez Davies", club: "R.C. Vallenar", obs: "Q.E.P.D." },
  { period: "1976–1977", name: "Héctor Quezada Pereda", club: "R.C. Los Andes", obs: "Q.E.P.D." },
  { period: "1977–1978", name: "Pedro Bruce La Rivera", club: "R.C. Villa Alemana", obs: "Q.E.P.D." },
  { period: "1978–1979", name: "Radoslav Razmilic Vlahovic", club: "R.C. Antofagasta", obs: "Q.E.P.D." },
  { period: "1979–1980", name: "Juan José Oyarzún", club: "R.C. La Ligua", obs: "Q.E.P.D." },
  { period: "1980–1981", name: "Sergio Jaramillo Rosselot", club: "R.C. Viña del Mar", obs: "Q.E.P.D." },
  { period: "1981–1982", name: "Mario Contreras Rojas", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1982–1983", name: "Pierre Chapar Haran", club: "R.C. Arica", obs: "Q.E.P.D." },
  { period: "1983–1984", name: "Carlos Fuentes Cadena", club: "R.C. Quillota", obs: "Q.E.P.D." },
  { period: "1984–1985", name: "Fernando González López", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1985–1986", name: "Domingo Solar Cartagena", club: "R.C. Antofagasta", obs: "Q.E.P.D." },
  { period: "1986–1987", name: "Víctor Muena Rodríguez", club: "R.C. Villa Alemana", phone: "+56 9 92359417", email: "vmuena@vtr.net" },
  { period: "1987–1988", name: "Sergio Garay Reuss", club: "R.C. Valparaíso", phone: "+56 32 2338565", email: "sergiogarayreuss@gmail.com" },
  { period: "1988–1989", name: "Alfonso Leppes Navarrete", club: "R.C. Antofagasta", phone: "+56 9 92892992", email: "estudio.leppes@vtr.net" },
  { period: "1989–1990", name: "Pedro Cueto Toro", club: "R.C. Quillota", phone: "+56 9 42456041", email: "lavaquimltda@gmail.com" },
  { period: "1990–1991", name: "Manuel Jordán López", club: "R.C. Valparaíso", obs: "Socio Honorario Valparaíso" },
  { period: "1991–1992", name: "Hernán Reyes Liard", club: "R.C. Los Andes", obs: "Q.E.P.D." },
  { period: "1992–1993", name: "Alberto Álvarez Osbén", club: "R.C. Viña del Mar", obs: "Q.E.P.D." },
  { period: "1993–1994", name: "Sergio Aguad Castillo", club: "R.C. Salamanca", phone: "+56 53 2551035", email: "sergioaguadcastill@gmail.com" },
  { period: "1994–1995", name: "Francisco Cabrejos Wenger", club: "R.C. Valparaíso", obs: "Q.E.P.D." },
  { period: "1995–1996", name: "Luis Lamperein Alarcón", club: "R.C. Copiapó", obs: "Retirado" },
  { period: "1996–1997", name: "Dan Martínez Pizarro", club: "R.C. Viña del Mar", obs: "Q.E.P.D." },
  { period: "1997–1998", name: "Mario Ramírez Cortés", club: "R.C. Antofagasta", phone: "+56 9 68495792", email: "mario.ramirezcortes@gmail.com" },
  { period: "1998–1999", name: "Alfredo Rebolar Rivas", club: "R.C. Quillota", phone: "+56 9 92368653", email: "alfredorebolar@gmail.com" },
  { period: "1999–2000", name: "Wladimir Flores Yovanovic", club: "R.C. Vallenar", phone: "+56 9 91298509", email: "wfloresy@gmail.com" },
  { period: "2000–2001", name: "Blas Martino Muñoz", club: "R.C. Arica", phone: "+56 58 2311978", email: "bmartino@quiborax.com" },
  { period: "2001–2002", name: "Reynaldo Martínez Urrutia", club: "R.C. Viña del Mar Norte", phone: "+56 9 94195671", email: "ramonreymartinez@hotmail.com" },
  { period: "2002–2003", name: "Juan Balart Vasconcellos", club: "R.C. La Portada", phone: "+56 9 95411332", email: "jbalart@vtr.net" },
  { period: "2003–2004", name: "Julio Lasagna Ruz", club: "R.C. Quilpué", obs: "Q.E.P.D." },
  { period: "2004–2005", name: "José Silva Estay", club: "R.C. Quillota", phone: "+56 9 93255099", email: "josilvae@gmail.com" },
  { period: "2005–2006", name: "Juan Mangili Godoy", club: "R.C. Quilpué Oriente", phone: "+56 9 93256778", email: "jmangili@vtr.net", obs: "Retirado" },
  { period: "2006–2007", name: "Luis Núñez Olivares", club: "R.C. La Serena", obs: "Q.E.P.D." },
  { period: "2007–2008", name: "Alberto Chong Yez", club: "R.C. Cavancha", phone: "+56 9 98844005", email: "albertochongy@gmail.com" },
  { period: "2008–2009", name: "Evaristo Carrizo Estay", club: "R.C. Valparaíso", phone: "+56 9 78885400", email: "ecarrizo@vtr.net" },
  { period: "2009–2010", name: "Luis Veliz Severino", club: "R.C. Copiapó", phone: "+56 9 85867398", email: "luvese2004@hotmail.com" },
  { period: "2010–2011", name: "Julio Sepúlveda Valdés", club: "R.C. Quillota", phone: "+56 9 92494871", email: "julsepul61@gmail.com" },
  { period: "2011–2012", name: "José Valencia Osorio", club: "R.C. Valparaíso", phone: "+56 9 62277624", email: "jvalencia@valepac.cl" },
  { period: "2012–2013", name: "Miguel Tapia Huerta", club: "R.C. El Salvador", phone: "+56 9 98486670", email: "mtapia69@gmail.com" },
  { period: "2013–2014", name: "Jorge Vega Díaz", club: "R.C. Valparaíso", phone: "+56 9 94340072", email: "jvegad@jvd.cl" },
  { period: "2014–2015", name: "Felipe Platero Moscópulos", club: "R.C. Iquique", phone: "+56 9 98834683", email: "fplaterom@gmail.com" },
  { period: "2015–2016", name: "Humberto Beckers Argomedo", club: "R.C. La Portada", phone: "+56 9 95417768", email: "hbeckers@pronor.cl" },
  { period: "2016–2017", name: "Sonia Garay Garay", club: "R.C. Playa Ancha", phone: "+56 9 94413187", email: "soniagaray@gmail.com" },
  { period: "2017–2018", name: "Edgar Ibarra González", club: "R.C. Calama", phone: "+56 9 98843181", email: "eig.ibarra@gmail.com" },
  { period: "2018–2019", name: "Luz Bernal González", club: "R.C. La Calera", phone: "+56 9 98865086", email: "luzbeatrizbernalgonzalez@gmail.com" },
  { period: "2019–2020", name: "Carlos Tapia", club: "R.C. La Serena", phone: "+56 9 66374305", email: "c.lino950@gmail.com" },
  { period: "2020–2021", name: "Emilio Sepúlveda Aguilar", club: "R.C. Chuquicamata", phone: "+56 9 95412250", email: "sepulveda.emilio@gmail.com" },
  { period: "2021–2022", name: "Ricardo Vera Martínez", club: "R.C. Copiapó", phone: "+56 9 77750179", email: "veramartinez.ricardo@gmail.com" },
  { period: "2022–2023", name: "Patricia Lorca Rojas", club: "R.C. Caliche", phone: "+56 9 91318715", email: "patricia.lorca99@gmail.com" },
  { period: "2023–2024", name: "Rodrigo Jarufe", club: "R.C. Quillota", phone: "+56 9 85299278", email: "rjarufe@gmail.com" },
  { period: "2024–2025", name: "Carlos Flores", club: "R.C. La Herradura", phone: "+56 9 53338218", email: "cfloresg2004@yahoo.es" }
];

export async function getEgdList(): Promise<EGDItem[]> {
  try {
    const res = await fetch(`${SHEETS_API_URL}?sheet=Listado_EGD`, {
      method: 'GET',
      redirect: 'follow',
      next: { revalidate: 60 },
    });

    if (!res.ok) return FALLBACK_EGD_LIST;

    const text = await res.text();
    if (text.trim().startsWith('<')) return FALLBACK_EGD_LIST;

    const data = JSON.parse(text);
    if (!Array.isArray(data) || data.length === 0) return FALLBACK_EGD_LIST;

    return data.map((item: any) => ({
      period: item.period || '',
      name: item.name || '',
      club: item.club || '',
      phone: item.phone || '',
      email: item.email || '',
      status: item.status || item.obs || '',
      obs: item.obs || item.status || '',
    }));
  } catch (error) {
    console.warn('⚠️ Google Sheets no disponible para Listado EGD. Usando respaldo local:', error);
    return FALLBACK_EGD_LIST;
  }
}
