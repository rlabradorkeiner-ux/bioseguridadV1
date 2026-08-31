import { useState, useEffect, useRef } from "react";
import logoImg from "@/imports/Logo.png";
import heroBg from "@/imports/Fotofondo.jpg";
import ilustracion from "@/imports/94f7c0a6-924c-4dae-964a-7536b614b875-1.png";
import ilustracion2 from "@/imports/Illustraci_n_2.png";
import hojaaImg from "@/imports/Hojaaa.png";
import logoAColor from "@/imports/LogoAColor.png";
import bannerLogos from "@/imports/Banner-1.png";

// ─── Color tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: "#268763",       // dark brand green
  primaryDark: "#1a5c41",   // hero / footer backgrounds
  primaryDeep: "#133d2c",   // deepest dark
  light: "#BEFDC4",         // light mint
  paleMint: "rgba(190,253,196,0.22)",  // pale tint for cards
  paleMintStrong: "rgba(190,253,196,0.35)",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function LeafIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6v7l4 9H5L9 10V3z" />
      <path d="M6 3h12" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="18" height="18" rx="1" />
      <path d="M9 3v18M2 9h18M2 15h18" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function WindIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ─── Service icons (outlined, matching boceto style) ─────────────────────────

function SvcIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke={C.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="36" cy="36" r="33" />
      {children}
    </svg>
  );
}

// Badge/seal icon — 16-bump wavy badge INSIDE a circle border + checkmark.
// Path computed from 16 outer points (r=22) + 16 inner points (r=17),
// connected with quadratic beziers through midpoints for tight wavy bumps.
function SealBadgeSvcIcon() {
  // prettier-ignore
  const badge = "M 37.7 16.7 Q 39.3 19.3 41.9 17.5 Q 44.4 15.7 44.9 18.8 Q 45.4 21.9 48.5 21.2 Q 51.6 20.4 50.9 23.5 Q 50.1 26.6 53.2 27.1 Q 56.3 27.6 54.5 30.1 Q 52.7 32.7 55.3 34.3 Q 58 36 55.3 37.7 Q 52.7 39.3 54.5 41.9 Q 56.3 44.4 53.2 44.9 Q 50.1 45.4 50.9 48.5 Q 51.6 51.6 48.5 50.9 Q 45.4 50.1 44.9 53.2 Q 44.4 56.3 41.9 54.5 Q 39.3 52.7 37.7 55.3 Q 36 58 34.3 55.3 Q 32.7 52.7 30.1 54.5 Q 27.6 56.3 27.1 53.2 Q 26.6 50.1 23.5 50.9 Q 20.4 51.6 21.2 48.5 Q 21.9 45.4 18.8 44.9 Q 15.7 44.4 17.5 41.9 Q 19.3 39.3 16.7 37.7 Q 14 36 16.7 34.3 Q 19.3 32.7 17.5 30.1 Q 15.7 27.6 18.8 27.1 Q 21.9 26.6 21.2 23.5 Q 20.4 20.4 23.5 21.2 Q 26.6 21.9 27.1 18.8 Q 27.6 15.7 30.1 17.5 Q 32.7 19.3 34.3 16.7 Z";
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke={C.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="36" cy="36" r="33" />
      <path d={badge} />
      <polyline points="27,36 33,42 46,27" />
    </svg>
  );
}

// Ear icon — outer pinna shape + inner concha C-curve + 3 sound-wave arcs.
// Matches the minimalist line style of the reference image at strokeWidth 2.2.
function HeadphonesSvcIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke={C.primary} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="36" cy="36" r="33" />
      {/* Outer ear boundary */}
      <path d="M 38 59 C 29 61 26 50 28 41 C 28 28 34 15 43 11 C 53 7 62 15 62 27 C 62 38 58 48 52 54 C 48 59 43 62 38 59 Z" />
      {/* Inner concha — backwards C */}
      <path d="M 53 21 C 62 27 62 47 53 53" />
      {/* Sound waves — three arcs opening toward the ear */}
      <path d="M 27 31 C 22 34 22 40 27 43" />
      <path d="M 22 27 C 14 32 14 42 22 47" />
      <path d="M 17 24 C 7 30 7 44 17 50" />
    </svg>
  );
}


// ─── Data ─────────────────────────────────────────────────────────────────────

interface CatService { name: string; desc: string; icon: React.ReactNode; }
interface ServiceCategory { label: string; services: CatService[]; }

const serviceCategories: ServiceCategory[] = [
  {
    label: "Gestión ambiental",
    services: [
      { name: "Categorización\nambiental", desc: "Relevamiento y categorización del impacto ambiental de tu actividad según la normativa vigente.", icon: <SvcIcon><path d="M36 22 L28 44 L36 40 L44 44 Z" /><line x1="36" y1="40" x2="36" y2="50" /></SvcIcon> },
      { name: "Certificado de\naptitud ambiental", desc: "Clasificación de complejidad, autorización de proyectos y aprobación provincial.", icon: <SealBadgeSvcIcon /> },
      { name: "Estudio de impacto\nambiental", desc: "EIA completos para nuevas obras, ampliaciones e instalaciones industriales.", icon: <SvcIcon><line x1="44" y1="28" x2="28" y2="44" /><path d="M44 24 L48 28 L38 38 L34 34 Z" /><path d="M26 46 L30 42" /></SvcIcon> },
      { name: "Licencia ambiental\ndigital", desc: "Gestión y tramitación de licencias ambientales digitales ante organismos competentes.", icon: <SvcIcon><rect x="26" y="22" width="20" height="26" rx="2" /><rect x="30" y="31" width="5" height="5" /><rect x="37" y="31" width="5" height="5" /><rect x="30" y="38" width="5" height="5" /><line x1="30" y1="27" x2="42" y2="27" /></SvcIcon> },
      { name: "Medición de\nhuella de carbono", desc: "Cálculo y reporte de emisiones de GEI según estándares GHG Protocol.", icon: <SvcIcon><rect x="26" y="24" width="20" height="24" rx="2" /><rect x="29" y="27" width="14" height="6" rx="1" /><line x1="29" y1="38" x2="32" y2="38" /><line x1="35" y1="38" x2="38" y2="38" /><line x1="41" y1="38" x2="43" y2="38" /><line x1="29" y1="42" x2="32" y2="42" /><line x1="35" y1="42" x2="38" y2="42" /><line x1="41" y1="42" x2="43" y2="42" /></SvcIcon> },
      { name: "Plan de gestión\nambiental", desc: "Diseño e implementación de sistemas de gestión ambiental ISO 14001.", icon: <SvcIcon><rect x="24" y="32" width="24" height="18" rx="2" /><path d="M30 32 V28 a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" /><circle cx="36" cy="41" r="3" /></SvcIcon> },
      { name: "Plan de gestión\nde residuos", desc: "Clasificación, disposición y trazabilidad de residuos sólidos urbanos e industriales.", icon: <SvcIcon><rect x="27" y="30" width="18" height="20" rx="2" /><line x1="24" y1="30" x2="48" y2="30" /><path d="M32 30v-3h8v3" /><line x1="32" y1="35" x2="32" y2="45" /><line x1="36" y1="35" x2="36" y2="45" /><line x1="40" y1="35" x2="40" y2="45" /></SvcIcon> },
      { name: "Reporte de\nsustentabilidad", desc: "Elaboración de reportes de sostenibilidad bajo estándares GRI y ODS.", icon: <SvcIcon><rect x="26" y="22" width="20" height="26" rx="2" /><line x1="30" y1="30" x2="42" y2="30" /><line x1="30" y1="35" x2="42" y2="35" /><line x1="30" y1="40" x2="38" y2="40" /></SvcIcon> },
    ],
  },
  {
    label: "Higiene y seguridad",
    services: [
      { name: "Gestión de seguridad\ne higiene laboral", desc: "Asesoramiento SRT, ART y evaluaciones de riesgo ocupacional.", icon: <SvcIcon><circle cx="34" cy="34" r="10" /><line x1="41" y1="41" x2="48" y2="48" /><line x1="30" y1="32" x2="38" y2="32" /><line x1="30" y1="36" x2="38" y2="36" /></SvcIcon> },
      { name: "Informes anti\nsiniéstrales", desc: "Documentación técnica y estadística de siniestros para organismos de control.", icon: <SvcIcon><rect x="26" y="22" width="20" height="26" rx="2" /><line x1="30" y1="30" x2="42" y2="30" /><line x1="30" y1="35" x2="42" y2="35" /><line x1="30" y1="40" x2="36" y2="40" /><line x1="30" y1="26" x2="42" y2="26" /></SvcIcon> },
      { name: "Procedimientos\nde emergencia", desc: "Protocolos, simulacros y planes de contingencia ambiental y operativa.", icon: <SvcIcon><circle cx="36" cy="36" r="10" /><line x1="36" y1="30" x2="36" y2="38" /><circle cx="36" cy="42" r="1" fill={C.primary} stroke="none" /></SvcIcon> },
      { name: "Programas de\nseguridad", desc: "Desarrollo e implementación de programas de prevención de riesgos laborales.", icon: <SealBadgeSvcIcon /> },
    ],
  },
  {
    label: "Mediciones",
    services: [
      { name: "Contaminantes\nambientales", desc: "Determinación de contaminantes químicos y material particulado en ambiente laboral.", icon: <SvcIcon><path d="M36 22 L28 44 L36 40 L44 44 Z" /><line x1="36" y1="40" x2="36" y2="50" /></SvcIcon> },
      { name: "Iluminación", desc: "Evaluación de condiciones de iluminación en puestos de trabajo según Resolución 800/16 SRT.", icon: <SvcIcon><path d="M30 44 h12" /><path d="M31 48 h10" /><path d="M30 44 C28 38 24 34 24 30 a12 12 0 0 1 24 0 c0 4-4 8-6 14Z" /><line x1="36" y1="18" x2="36" y2="14" /><line x1="48" y1="22" x2="51" y2="19" /><line x1="24" y1="22" x2="21" y2="19" /></SvcIcon> },
      { name: "Ruido laboral", desc: "Monitoreo de exposición al ruido en puestos de trabajo según normativa IRAM y SRT.", icon: <SvcIcon><path d="M22 30 q7-6 14 0 t14 0" /><path d="M22 36 q7-6 14 0 t14 0" /><path d="M22 42 q7-6 14 0 t14 0" /></SvcIcon> },
      { name: "Ruido molesto\nal vecindario", desc: "Medición y evaluación de emisiones sonoras al exterior según normativa provincial y municipal.", icon: <SvcIcon><path d="M26 30 h5 l9-8 v28 l-9-8 h-5 z" /><path d="M44 29 c4 4 4 10 0 14" /><path d="M47 25 c7 7 7 18 0 22" /></SvcIcon> },
      { name: "Vibraciones", desc: "Evaluación de vibraciones mano-brazo y cuerpo entero según normativa.", icon: <SvcIcon><path d="M22 30 q7-6 14 0 t14 0" /><path d="M22 36 q7-6 14 0 t14 0" /><path d="M22 42 q7-6 14 0 t14 0" /></SvcIcon> },
    ],
  },
  {
    label: "Barrios cerrados",
    services: [
      { name: "Estudios de impacto\nambiental", desc: "EIA específicos para desarrollos urbanísticos, barrios cerrados y loteos.", icon: <SvcIcon><line x1="44" y1="28" x2="28" y2="44" /><path d="M44 24 L48 28 L38 38 L34 34 Z" /><path d="M26 46 L30 42" /></SvcIcon> },
      { name: "Gestión de efluentes\ncloacales", desc: "Diseño, monitoreo y gestión de sistemas de tratamiento de efluentes cloacales.", icon: <SvcIcon><path d="M36 22 C36 22 26 34 26 41 a10 10 0 0 0 20 0 C46 34 36 22 36 22Z" /><path d="M30 43 C30 47 33 49 36 49" /></SvcIcon> },
      { name: "Gestión de\nresiduos", desc: "Planificación y gestión de residuos sólidos urbanos en urbanizaciones privadas.", icon: <SvcIcon><rect x="27" y="30" width="18" height="20" rx="2" /><line x1="24" y1="30" x2="48" y2="30" /><path d="M32 30v-3h8v3" /><line x1="32" y1="35" x2="32" y2="45" /><line x1="36" y1="35" x2="36" y2="45" /><line x1="40" y1="35" x2="40" y2="45" /></SvcIcon> },
      { name: "Habilitaciones\nmunicipales", desc: "Gestión integral de trámites de habilitación municipal para emprendimientos inmobiliarios.", icon: <SvcIcon><path d="M29 22 h14 v28 l-7-5 -7 5 Z" /></SvcIcon> },
    ],
  },
];


const clients = [
  "RAÚL CÓRDOBA", "Carshop Neumáticos", "TERRITORIO", "JIU JITSU", "ACINDAR Grupo ArcelorMittal",
  "BIOCONTROL", "AGROINDUSTRIAS DEL LITORAL", "METALÚRGICA DEL CENTRO",
];

const stats = [
  { value: "+10", label: "Años de trayectoria" },
  { value: "+100", label: "Empresas asistidas" },
  { value: "+500", label: "Trámites gestionados" },
];

const whyUs = [
  { title: "Equipo interdisciplinario", desc: "Ingenieros ambientales, químicos, abogados y especialistas en SHE bajo un mismo paraguas." },
  { title: "Gestión integral", desc: "Desde el diagnóstico hasta la presentación ante el organismo de control, sin intermediarios." },
  { title: "Respuesta ágil", desc: "Turnos de urgencia, guardias técnicas y plazos garantizados por contrato." },
  { title: "Actualización normativa", desc: "Monitoreamos diariamente cambios en la legislación nacional, provincial y municipal." },
];

// ─── Shared button variants ────────────────────────────────────────────────────

function BtnPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200"
      style={{ background: C.light, color: C.primary, fontFamily: "DM Sans, sans-serif" }}
      onMouseEnter={e => (e.currentTarget.style.background = "#a8f5b0")}
      onMouseLeave={e => (e.currentTarget.style.background = C.light)}
    >
      {children}
    </a>
  );
}

function BtnOutline({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-base border border-white/30 hover:border-white/60 text-white/90 transition-all duration-200"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {children}
    </a>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Servicios", "Nosotros", "Guía rápida", "Clientes", "Contacto"];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? `${C.primary}f7` : C.primary, backdropFilter: scrolled ? "blur(8px)" : "none" }}
    >
      <nav className="max-w-7xl mx-auto px-8 lg:px-10 flex items-center justify-between h-16">

        {/* Mobile: hamburger LEFT — Desktop: hidden (links are centered) */}
        <button className="md:hidden text-white p-1 -ml-1" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Desktop logo LEFT */}
        <a href="#" className="hidden md:flex items-center">
          <img src={logoImg} alt="Bio Seguridad" className="h-11 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.link/qg9cql" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200"
          style={{ background: C.light, color: C.primary, fontFamily: "DM Sans, sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#a8f5b0")}
          onMouseLeave={e => (e.currentTarget.style.background = C.light)}
        >
          <span style={{ color: C.primary }}><PhoneIcon size={15} /></span>
          Contactar
        </a>

        {/* Mobile: leaf logo RIGHT */}
        <a href="#" className="md:hidden flex items-center">
          <img src={hojaaImg} alt="Bio Seguridad" className="h-8 w-8 object-contain" />
        </a>
      </nav>

      {/* Mobile dropdown menu — smooth slide + fade */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="border-t border-white/10 px-6 py-5 flex flex-col gap-4" style={{ background: C.primaryDark }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-white/90 text-base font-medium py-1"
              style={{ fontFamily: "DM Sans, sans-serif" }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="https://wa.link/qg9cql" target="_blank" rel="noopener noreferrer"
            className="mt-2 text-center px-5 py-2.5 rounded-full font-bold text-sm"
            style={{ background: C.light, color: C.primary, fontFamily: "DM Sans, sans-serif" }}
            onClick={() => setOpen(false)}
          >
            Contactar ahora
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "+10", label: "Años de trayectoria" },
  { value: "+100", label: "Empresas asistidas" },
  { value: "+500", label: "Trámites gestionados" },
];

// subtle drop shadow at 10% opacity for light text over variable backgrounds
const lightTextShadow = "0 1px 8px rgba(0,0,0,0.10), 0 2px 16px rgba(0,0,0,0.10)";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: C.primaryDeep }}>
      {/* Background photo — full cover */}
      <img
        src={heroBg}
        alt="Paisaje industrial con campo verde y chimeneas al fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Desktop gradient: darkens left, fades right */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background: `linear-gradient(
            to right,
            rgba(19,61,44,0.82) 0%,
            rgba(19,61,44,0.62) 45%,
            rgba(19,61,44,0.18) 72%,
            rgba(19,61,44,0.04) 100%
          )`,
        }}
      />
      {/* Mobile gradient: uniform dark overlay */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{ background: "rgba(19,61,44,0.72)" }}
      />
      {/* Subtle bottom darkening so stats bar text reads cleanly */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(19,61,44,0.72) 0%, transparent 28%)" }}
      />

      {/* Content — top-aligned, left column */}
      <div className="relative z-10 flex-1 flex items-start">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-full lg:max-w-[52%] lg:min-w-[340px] flex flex-col gap-5 lg:gap-6">

            {/* Mobile-only: color logo centered */}
            <div className="sm:hidden flex justify-start mb-2">
              <img
                src={logoAColor}
                alt="Bio Seguridad"
                className="w-3/5 object-contain"
              />
            </div>

            {/* Eyebrow label — desktop only */}
            <p
              className="hidden sm:block text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: C.light, fontFamily: "DM Sans, sans-serif", textShadow: lightTextShadow }}
            >
              Ingeniería Ambiental · Higiene · Seguridad
            </p>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
              }}
              className="text-white text-[2.6rem] lg:text-[clamp(2.8rem,5.5vw,5rem)]"
            >
              Cumplimiento normativo y soluciones integrales
            </h1>

            {/* Body copy */}
            <p
              className="text-white/80 text-base lg:text-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif", textShadow: lightTextShadow, maxWidth: "42ch" }}
            >
              Habilitaciones, gestión ambiental, residuos, higiene y seguridad.
              Simplificamos la consulta y resolvemos cada trámite para empresas de todos los tamaños.
            </p>

            {/* CTAs — stacked full-width on mobile, row on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#guía-rápida"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200"
                style={{ background: C.light, color: C.primary, fontFamily: "DM Sans, sans-serif" }}
              >
                ¿Qué trámite necesitás?
              </a>
              <a
                href="#servicios"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-base border border-white/30 hover:border-white/60 text-white/90 transition-all duration-200"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Ver todos los servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — solid dark green, 3 columns */}
      <div className="relative z-10 border-t border-white/10" style={{ background: C.primaryDeep }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-3 divide-x divide-white/10">
          {heroStats.map((s) => (
            <div key={s.label} className="py-5 text-center">
              <div className="text-3xl font-black" style={{ color: C.light, fontFamily: "DM Sans, sans-serif" }}>
                {s.value}
              </div>
              <div className="text-white/55 text-[0.65rem] mt-0.5 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/*
          Mobile:  flex-col, order 1→2→3→4
          Desktop: 2-col grid with explicit row placement
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-[55%_45%] lg:grid-rows-[auto_auto] gap-6 lg:gap-10 lg:items-stretch">

          {/* 1 — Texto explicativo */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
              Quiénes somos
            </p>
            <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.1, color: C.primary }} className="text-4xl lg:text-5xl mb-7">
              Un equipo integrado para cada desafío ambiental
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Bioseguridad está conformado por profesionales en ingeniería ambiental y seguridad e higiene que trabaja
              de forma integrada para abordar la gestión ambiental, el cumplimiento normativo y la prevención de riesgos
              en organizaciones públicas y privadas.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Simplificamos la consulta y resolvemos cada trámite, desde el diagnóstico inicial hasta la presentación
              final ante el organismo de control, con plazos concretos y comunicación transparente.
            </p>
          </div>

          {/* 2 — Ilustración */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 flex items-end justify-center overflow-hidden">
            <img
              src={ilustracion}
              alt="Profesionales de ingeniería ambiental trabajando con planos y laptop"
              className="w-full object-contain object-bottom"
              style={{ maxHeight: "420px" }}
            />
          </div>

          {/* 3 — Certificados */}
          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <div className="rounded-xl border border-gray-100 p-5 flex items-center gap-4" style={{ background: "white", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.paleMintStrong, color: C.primary }}>
                <ShieldIcon />
              </div>
              <div>
                <div className="font-black text-base" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>Certificados</div>
                <div className="text-gray-500 text-sm">ISO 14001 · OHSAS 18001 · SRT habilitados</div>
              </div>
            </div>
          </div>

          {/* 4 — Cápsulas: lista en mobile, grilla 2×2 en desktop */}
          <div className="order-4 lg:col-start-1 lg:row-start-2 flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:mt-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="flex flex-col gap-2 p-4 rounded-xl w-full" style={{ background: C.paleMint }}>
                <div className="flex items-center gap-2">
                  <span style={{ color: C.primary, flexShrink: 0 }}><CheckCircleIcon /></span>
                  <span className="font-bold text-sm" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>{w.title}</span>
                </div>
                <p className="text-gray-600 text-sm leading-snug pl-7">{w.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServiceCard({
  name, desc, icon, active, onToggle,
}: {
  name: string; desc: string; icon: React.ReactNode;
  active: boolean; onToggle: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  // On desktop use hover; on mobile use the controlled active prop
  const shown = hovered || active;

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center p-6 rounded-2xl select-none"
      style={{
        minHeight: "200px",
        cursor: "pointer",
        background: shown ? C.light : "white",
        border: shown ? `2px solid ${C.primary}` : "2px solid transparent",
        transition: "background 0.22s ease, border-color 0.22s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onToggle}
    >
      {/* Default state: icon + name */}
      <div
        style={{
          opacity: shown ? 0 : 1,
          transform: shown ? "scale(0.92)" : "scale(1)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
          position: shown ? "absolute" : "relative",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {icon}
        <span className="font-bold text-sm leading-snug whitespace-pre-line" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
          {name}
        </span>
      </div>

      {/* Active/hover state: description */}
      <div
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "scale(1)" : "scale(0.94)",
          transition: "opacity 0.22s ease 0.05s, transform 0.22s ease 0.05s",
          position: shown ? "relative" : "absolute",
          pointerEvents: "none",
        }}
      >
        <p className="font-bold text-sm leading-relaxed" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeQueue, setActiveQueue] = useState<number[]>([]);

  const handleTab = (i: number) => {
    setActiveTab(i);
    setActiveQueue([]);
  };

  const toggle = (i: number) => {
    setActiveQueue(prev => {
      if (prev.includes(i)) return prev.filter(x => x !== i);
      const next = prev.length >= 3 ? prev.slice(1) : prev;
      return [...next, i];
    });
  };

  const currentServices = serviceCategories[activeTab].services;

  return (
    <section id="servicios" className="py-24" style={{ background: "#F5F6F5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
            Nuestros servicios
          </p>
          <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.1, color: C.primary }} className="text-4xl lg:text-5xl max-w-xl">
            Adaptamos cada solución a tu escala
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl">
            Cubrimos todo el espectro de la gestión ambiental, desde pymes y comercios hasta grandes industrias.
          </p>
        </div>

        {/* ── Mobile nav: arrows + dots (hidden on sm+) ── */}
        <div className="sm:hidden mb-8">
          <div className="flex items-center justify-between gap-4 mb-3">
            <button
              onClick={() => handleTab((activeTab - 1 + serviceCategories.length) % serviceCategories.length)}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ borderColor: C.primary, color: C.primary }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>

            <span className="font-black text-lg text-center" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
              {serviceCategories[activeTab].label}
            </span>

            <button
              onClick={() => handleTab((activeTab + 1) % serviceCategories.length)}
              className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ borderColor: C.primary, color: C.primary }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2">
            {serviceCategories.map((_, i) => (
              <button
                key={i}
                onClick={() => handleTab(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{ background: i === activeTab ? C.primary : "#c4d4cb" }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop nav: segmented control with sliding pill (hidden on mobile) ── */}
        <div className="hidden sm:block mb-8">
          <div
            className="relative flex rounded-full p-1"
            style={{ background: "#e2e8e4" }}
          >
            <div
              className="absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: `calc(${activeTab} * 25% + 4px)`,
                width: "calc(25% - 8px)",
                background: C.primary,
              }}
            />
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => handleTab(i)}
                className="relative z-10 flex-1 py-2.5 px-4 text-sm font-bold text-center transition-colors duration-300 rounded-full"
                style={{
                  color: activeTab === i ? "white" : "#6b7280",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Service cards grid — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {currentServices.map((s, i) => (
            <ServiceCard
              key={s.name}
              name={s.name}
              desc={s.desc}
              icon={s.icon}
              active={activeQueue.includes(i)}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Quiz data ────────────────────────────────────────────────────────────────

type QuizStep = 'q1' | 'q2' | 'q3A' | 'q3B' | 'q3C' | 'q3D' | 'q3E' | 'result';

interface QuizOption { id: string; emoji: string; label: string; hint?: string; }

interface QuizQuestion { title: string; options: QuizOption[]; }

const quizQuestions: Record<string, QuizQuestion> = {
  q1: {
    title: "¿Qué tipo de actividad realizás?",
    options: [
      { id: 'A', emoji: '🏪', label: 'Comercio o local', hint: 'Local comercial, gastronomía, oficina, pequeño establecimiento.' },
      { id: 'B', emoji: '🏭', label: 'Fábrica o empresa', hint: 'Industria, planta productiva, empresa con instalaciones u operaciones complejas.' },
      { id: 'C', emoji: '👷', label: 'Empresa de servicios', hint: 'Construcción, mantenimiento, logística, servicios profesionales u operativos.' },
      { id: 'D', emoji: '♻️', label: 'Mi actividad genera residuos', hint: 'Actividades que producen, almacenan, transportan o gestionan residuos.' },
    ],
  },
  q2: {
    title: "¿Qué necesitás resolver principalmente?",
    options: [
      { id: 'A', emoji: '📋', label: 'Cumplir con requisitos y habilitaciones' },
      { id: 'B', emoji: '🌱', label: 'Evaluar o gestionar el impacto ambiental' },
      { id: 'C', emoji: '🦺', label: 'Mejorar la seguridad y prevenir riesgos' },
      { id: 'D', emoji: '📊', label: 'Medir, controlar o demostrar resultados' },
      { id: 'E', emoji: '♻️', label: 'Gestionar residuos de manera adecuada' },
    ],
  },
  q3A: {
    title: "¿Qué tipo de requisito necesitás cumplir?",
    options: [
      { id: 'A', emoji: '🏛️', label: 'Habilitar o regularizar mi actividad' },
      { id: 'B', emoji: '📑', label: 'Me solicitaron documentación ambiental' },
      { id: 'C', emoji: '🦺', label: 'Me solicitaron documentación de seguridad' },
    ],
  },
  q3B: {
    title: "¿En qué etapa se encuentra tu organización?",
    options: [
      { id: 'A', emoji: '🌱', label: 'Voy a comenzar una actividad o proyecto' },
      { id: 'B', emoji: '🏭', label: 'Ya estoy funcionando y necesito evaluar mi situación' },
      { id: 'C', emoji: '📈', label: 'Quiero mejorar mi desempeño ambiental' },
    ],
  },
  q3C: {
    title: "¿Qué querés controlar o mejorar?",
    options: [
      { id: 'A', emoji: '🔥', label: 'Prevenir incendios y situaciones de emergencia' },
      { id: 'B', emoji: '👷', label: 'Mejorar la seguridad de las personas que trabajan' },
      { id: 'C', emoji: '📐', label: 'Evaluar condiciones del ambiente laboral' },
    ],
  },
  q3D: {
    title: "¿Qué querés medir?",
    options: [
      { id: 'A', emoji: '🌎', label: 'El impacto ambiental de mi organización' },
      { id: 'B', emoji: '📊', label: 'Comunicar nuestro desempeño sustentable' },
      { id: 'C', emoji: '🔊', label: 'Las condiciones del ambiente laboral' },
    ],
  },
  q3E: {
    title: "¿Qué situación describe mejor tu actividad?",
    options: [
      { id: 'A', emoji: '🗑️', label: 'Genero residuos como parte de mi actividad' },
      { id: 'B', emoji: '🔄', label: 'Necesito ordenar o mejorar la gestión de mis residuos' },
      { id: 'C', emoji: '📋', label: 'Necesito cumplir requisitos ambientales sobre mis residuos' },
    ],
  },
};

const quizNext: Record<string, Record<string, QuizStep>> = {
  q1:  { A: 'q2', B: 'q2', C: 'q2', D: 'q2' },
  q2:  { A: 'q3A', B: 'q3B', C: 'q3C', D: 'q3D', E: 'q3E' },
  q3A: { A: 'result', B: 'result', C: 'result' },
  q3B: { A: 'result', B: 'result', C: 'result' },
  q3C: { A: 'result', B: 'result', C: 'result' },
  q3D: { A: 'result', B: 'result', C: 'result' },
  q3E: { A: 'result', B: 'result', C: 'result' },
};

const quizResults: Record<string, Record<string, string[]>> = {
  q3A: {
    A: ['Habilitaciones municipales', 'Categorización ambiental', 'Informe ambiental de cumplimiento'],
    B: ['Categorización ambiental', 'Estudio de impacto ambiental', 'Plan de gestión ambiental', 'Informe ambiental de cumplimiento'],
    C: ['Informes antisiniestrales', 'Procedimientos de emergencia', 'Programas de seguridad', 'Gestión de seguridad e higiene laboral'],
  },
  q3B: {
    A: ['Categorización ambiental', 'Estudio de impacto ambiental', 'Plan de gestión ambiental'],
    B: ['Informe ambiental de cumplimiento', 'Plan de gestión ambiental', 'Categorización ambiental'],
    C: ['Plan de gestión ambiental', 'Medición de huella de carbono', 'Reporte de sustentabilidad', 'Mediciones de contaminantes'],
  },
  q3C: {
    A: ['Informes antisiniestrales', 'Procedimientos de emergencia', 'Programas de seguridad'],
    B: ['Gestión de seguridad e higiene laboral', 'Programas de seguridad', 'Procedimientos de emergencia'],
    C: ['Mediciones de ruido', 'Mediciones de iluminación', 'Mediciones de contaminantes', 'Mediciones de vibraciones', 'Gestión de seguridad e higiene laboral'],
  },
  q3D: {
    A: ['Medición de huella de carbono', 'Mediciones de contaminantes', 'Plan de gestión ambiental'],
    B: ['Medición de huella de carbono', 'Reporte de sustentabilidad', 'Plan de gestión ambiental'],
    C: ['Mediciones de ruido', 'Mediciones de iluminación', 'Mediciones de contaminantes', 'Mediciones de vibraciones'],
  },
  q3E: {
    A: ['Plan de gestión de residuos', 'Gestión de seguridad e higiene laboral'],
    B: ['Plan de gestión de residuos', 'Plan de gestión ambiental', 'Informe ambiental de cumplimiento'],
    C: ['Plan de gestión de residuos', 'Categorización ambiental', 'Informe ambiental de cumplimiento'],
  },
};

const stepOrder: QuizStep[] = ['q1', 'q2', 'q3A', 'q3B', 'q3C', 'q3D', 'q3E', 'result'];
const stepProgress: Record<QuizStep, number> = {
  q1: 1, q2: 2, q3A: 3, q3B: 3, q3C: 3, q3D: 3, q3E: 3, result: 3,
};

// ─── Quick Guide ──────────────────────────────────────────────────────────────

function QuickGuide() {
  const [step, setStep] = useState<QuizStep>('q1');
  const [history, setHistory] = useState<QuizStep[]>([]);
  const [answers, setAnswers] = useState<Partial<Record<QuizStep, string>>>({});
  const [resultServices, setResultServices] = useState<string[]>([]);

  const question = quizQuestions[step];

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [step]: optionId };
    setAnswers(newAnswers);
    const next = quizNext[step]?.[optionId] ?? 'result';
    setHistory(h => [...h, step]);

    if (next === 'result') {
      // find which q3x we just answered
      const q3step = step as string;
      const services = quizResults[q3step]?.[optionId] ?? [];
      setResultServices(services);
    }
    setStep(next);
  };

  const handleBack = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory(h => h.slice(0, -1));
    setStep(prev);
  };

  const handleReset = () => {
    setStep('q1');
    setHistory([]);
    setAnswers({});
    setResultServices([]);
  };

  const progress = stepProgress[step];
  const totalSteps = 3;

  const leftCopy: Record<QuizStep, { sub: string; body: string }> = {
    q1:     { sub: 'Paso 1 de 3', body: 'Contanos qué tipo de organización tenés para personalizar tu diagnóstico.' },
    q2:     { sub: 'Paso 2 de 3', body: 'Identificamos cuál es tu necesidad principal para orientar la recomendación.' },
    q3A:    { sub: 'Paso 3 de 3', body: 'Un detalle más y tendremos los servicios que más se ajustan a tu situación.' },
    q3B:    { sub: 'Paso 3 de 3', body: 'Un detalle más y tendremos los servicios que más se ajustan a tu situación.' },
    q3C:    { sub: 'Paso 3 de 3', body: 'Un detalle más y tendremos los servicios que más se ajustan a tu situación.' },
    q3D:    { sub: 'Paso 3 de 3', body: 'Un detalle más y tendremos los servicios que más se ajustan a tu situación.' },
    q3E:    { sub: 'Paso 3 de 3', body: 'Un detalle más y tendremos los servicios que más se ajustan a tu situación.' },
    result: { sub: 'Tu diagnóstico', body: 'Estos son los servicios que recomendamos para tu caso. Un profesional te acompaña en cada paso.' },
  };

  return (
    <section id="guía-rápida" className="py-24" style={{ background: C.primary }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left copy ── */}
          <div className="lg:pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: C.light, fontFamily: "DM Sans, sans-serif" }}>
              Guía rápida
            </p>
            <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.1 }} className="text-white text-4xl lg:text-5xl mb-6">
              Respondé 3 preguntas y te decimos exactamente cómo podemos ayudarte
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              {leftCopy[step].body}
            </p>
            <div className="flex flex-col gap-3">
              {["Diagnóstico gratuito inicial", "Presupuesto sin compromiso", "Profesional dedicado a tu caso"].map((b) => (
                <div key={b} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: C.light }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke={C.primary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* ── Quiz card ── */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* Progress bar */}
            {step !== 'result' && (
              <div className="px-8 pt-7 pb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.primary }}>
                    {leftCopy[step].sub}
                  </span>
                  <span className="text-xs text-gray-400">{progress}/{totalSteps}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-gray-100">
                  <div
                    className="h-1.5 rounded-full transition-all duration-400"
                    style={{ width: `${(progress / totalSteps) * 100}%`, background: C.primary }}
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {step === 'result' ? (
                /* ── Result screen ── */
                <div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: C.paleMintStrong, color: C.primary }}>
                    <CheckCircleIcon />
                  </div>
                  <h3 className="font-black text-2xl mb-1" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
                    Estos servicios son para vos
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">Basado en tus respuestas, recomendamos:</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {resultServices.map(s => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full text-sm font-bold"
                        style={{ background: C.paleMintStrong, color: C.primary, fontFamily: "DM Sans, sans-serif" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.link/qg9cql" target="_blank" rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-full font-bold text-base text-center transition-all duration-200"
                      style={{ background: C.primary, color: "white", fontFamily: "DM Sans, sans-serif", display: "block" }}
                    >
                      Hablar con un especialista →
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full py-3 rounded-full font-semibold text-sm border transition-all duration-200"
                      style={{ borderColor: "#e5e7eb", color: "#6b7280", fontFamily: "DM Sans, sans-serif" }}
                    >
                      Volver a empezar
                    </button>
                  </div>
                </div>
              ) : (
                /* ── Question screen ── */
                <div>
                  <h3 className="font-black text-lg mb-5 leading-snug" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
                    {question.title}
                  </h3>

                  <div className="flex flex-col gap-2.5">
                    {question.options.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect(opt.id)}
                        className="text-left p-4 rounded-xl border-2 transition-all duration-150 group"
                        style={{ borderColor: "#e5e7eb", background: "white" }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = C.primary;
                          e.currentTarget.style.background = C.paleMint;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "#e5e7eb";
                          e.currentTarget.style.background = "white";
                        }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-xl leading-none mt-0.5 flex-shrink-0">{opt.emoji}</span>
                          <div>
                            <div className="font-bold text-sm" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
                              {opt.label}
                            </div>
                            {opt.hint && (
                              <div className="text-gray-400 text-xs mt-0.5 leading-snug">{opt.hint}</div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {history.length > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-5 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      style={{ color: "#9ca3af", fontFamily: "DM Sans, sans-serif" }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.primary)}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                      Volver
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Soft CTA ─────────────────────────────────────────────────────────────────

function PhotoCTA() {
  return (
    <section id="sin-compromiso" style={{ background: C.light }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[55%_45%] min-h-[260px]">

          {/* Left: text + button — top-aligned with symmetric padding */}
          <div className="py-14 lg:py-16 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
              Sin compromiso
            </p>
            <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.08, color: C.primary }} className="text-4xl lg:text-[2.75rem] mb-4">
              ¿No estás seguro de lo que necesitás?
            </h2>
            <p style={{ color: C.primaryDeep }} className="text-base leading-relaxed mb-7 max-w-sm opacity-80">
              No hace falta tener todo claro. Contanos brevemente tu situación y un profesional te orienta sin costo.
            </p>
            <div>
              <a
                href="https://wa.link/qg9cql" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-base transition-all duration-200"
                style={{ background: C.primary, color: "white", fontFamily: "DM Sans, sans-serif" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Escribinos directamente
              </a>
            </div>
          </div>

          {/* Right: illustration centered vertically */}
          <div className="flex items-center justify-center">
            <img
              src={ilustracion2}
              alt="Persona con dudas rodeada de signos de pregunta"
              className="w-full object-contain"
              style={{ maxHeight: "300px", maxWidth: "420px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Clients ──────────────────────────────────────────────────────────────────

function Clients() {
  return (
    <section id="clientes" className="pt-20 pb-20 bg-white overflow-hidden">

      {/* Logo marquee — image banner */}
      <div className="relative mb-16 overflow-hidden">
        <div className="flex animate-[marquee_70s_linear_infinite]" style={{ width: "max-content" }}>
          <img src={bannerLogos} alt="Clientes Bio Seguridad" className="h-24 w-auto flex-shrink-0 object-contain" draggable={false} />
          <img src={bannerLogos} alt="" aria-hidden className="h-24 w-auto flex-shrink-0 object-contain" draggable={false} />
        </div>
      </div>

      {/* Heading — centered below logos */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] mb-4" style={{ color: C.primary, fontFamily: "DM Sans, sans-serif" }}>
          Clientes que confían en nosotros
        </p>
        <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.1, color: C.primary }} className="text-4xl lg:text-5xl">
          Priorizamos la calidad y el respeto por el medio ambiente
        </h2>
      </div>

    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="py-24" style={{ background: "#F7FAF9" }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">

        {/* Button — top */}
        <div className="mb-10">
          <a
            href="https://wa.link/qg9cql" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-base transition-all duration-200"
            style={{ background: C.primary, color: "white", fontFamily: "DM Sans, sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = C.primaryDark)}
            onMouseLeave={e => (e.currentTarget.style.background = C.primary)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contactar
          </a>
        </div>

        {/* Title + subtitle */}
        <h2 style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 900, lineHeight: 1.1, color: C.primary }} className="text-4xl lg:text-5xl mb-5">
          Hablemos de tu proyecto
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Nuestro equipo te responde en menos de 24 horas hábiles, sin compromiso.
        </p>

        {/* Contact info — left-aligned on mobile, centered on desktop */}
        <div className="flex flex-col items-start sm:flex-row sm:items-start sm:justify-center gap-6 sm:gap-10">

          {/* Teléfono */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: C.paleMintStrong, color: C.primary }}>
              <PhoneIcon />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Teléfono</div>
              <a href="tel:+5403400015698492" className="block font-semibold whitespace-nowrap transition-colors hover:opacity-70" style={{ color: C.primary }}>(03400) 15698492</a>
              <a href="tel:+543794767209" className="block font-semibold transition-colors hover:opacity-70" style={{ color: C.primary }}>(379) 476-7209</a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: C.paleMintStrong, color: C.primary }}>
              <MailIcon />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</div>
              <a href="mailto:joana.bioseguridad@gmail.com" className="block font-semibold transition-colors hover:opacity-70" style={{ color: C.primary }}>joana.bioseguridad@gmail.com</a>
              <a href="mailto:agustina.bioseguridad@gmail.com" className="block font-semibold transition-colors hover:opacity-70" style={{ color: C.primary }}>agustina.bioseguridad@gmail.com</a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: C.paleMintStrong, color: C.primary }}>
              <MapPinIcon />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Ubicación</div>
              <div className="font-semibold whitespace-nowrap" style={{ color: C.primary }}>Santa Fe · Buenos Aires</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: C.primaryDeep }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img src={logoImg} alt="Bio Seguridad" className="h-8 w-auto object-contain" style={{ filter: "brightness(0.9)" }} />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ingeniería ambiental, higiene y seguridad para organizaciones que eligen cumplir.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: C.light, fontFamily: "DM Sans, sans-serif" }}>Servicios</h4>
            <ul className="flex flex-col gap-2.5">
              {["Estudios de impacto ambiental", "Planes de gestión ambiental", "Gestión de residuos", "Higiene y seguridad", "Monitoreo ambiental"].map(s => (
                <li key={s}><a href="#servicios" className="text-white/50 hover:text-white text-sm transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: C.light, fontFamily: "DM Sans, sans-serif" }}>Empresa</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Quiénes somos", href: "#nosotros" },
                { label: "Clientes", href: "#sin-compromiso" },
                { label: "Trabaja con nosotros", href: "#contacto" },
              ].map(s => (
                <li key={s.label}><a href={s.href} className="text-white/50 hover:text-white text-sm transition-colors">{s.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest" style={{ color: C.light, fontFamily: "DM Sans, sans-serif" }}>Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5403400015698492" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <PhoneIcon size={16} /> (03400) 15698492
              </a>
              <a href="tel:+543794767209" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <PhoneIcon size={16} /> (379) 476-7209
              </a>
              <a href="mailto:joana.bioseguridad@gmail.com" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <MailIcon /> joana.bioseguridad@gmail.com
              </a>
              <a href="mailto:agustina.bioseguridad@gmail.com" className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors">
                <MailIcon /> agustina.bioseguridad@gmail.com
              </a>
              <span className="flex items-center gap-2.5 text-white/50 text-sm">
                <MapPinIcon /> Santa Fe · Buenos Aires
              </span>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-white/30 text-xs text-center sm:text-left">© 2026 Bio Seguridad S.R.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Marquee keyframe ─────────────────────────────────────────────────────────

const marqueeStyle = `
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
`;

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{marqueeStyle}</style>
      <div className="min-h-full">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <QuickGuide />
          <PhotoCTA />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
