import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Gavel,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  shortLabel?: string;
  description: string;
  icon: LucideIcon;
  step?: number;
};

/**
 * Le parcours reprend l'ordre logique du guide et de la loi :
 * comprendre, vérifier, préparer, déposer, examiner, obtenir, payer, exploiter.
 */
export const guideNav: NavItem[] = [
  {
    href: "/guide",
    label: "Vue d'ensemble du parcours",
    shortLabel: "Parcours",
    description: "Les étapes de la demande, de l'idée à l'exploitation du brevet.",
    icon: CheckCircle2,
  },
  {
    href: "/guide/comprendre",
    label: "Comprendre le brevet",
    shortLabel: "Comprendre",
    description: "Définition, titularité, durée et inventions des salariés.",
    icon: BookOpen,
    step: 1,
  },
  {
    href: "/guide/brevetabilite",
    label: "Vérifier la brevetabilité",
    shortLabel: "Brevetabilité",
    description: "Nouveauté, activité inventive, application industrielle et exclusions.",
    icon: ShieldCheck,
    step: 2,
  },
  {
    href: "/guide/depot",
    label: "Préparer et déposer la demande",
    shortLabel: "Dépôt",
    description: "Pièces, langue, priorité, modifications, retrait.",
    icon: FileText,
    step: 3,
  },
  {
    href: "/guide/examen",
    label: "Examen, publication et délivrance",
    shortLabel: "Examen",
    description: "Contrôles, délais, recours, registre national.",
    icon: Landmark,
    step: 4,
  },
  {
    href: "/guide/couts",
    label: "Coûts et délais",
    shortLabel: "Coûts",
    description: "Redevances, annuités et échéances à retenir.",
    icon: CircleDollarSign,
    step: 5,
  },
  {
    href: "/guide/droits",
    label: "Droits et obligations",
    shortLabel: "Droits",
    description: "Droit exclusif, exceptions, exploitation, déchéance.",
    icon: Scale,
    step: 6,
  },
  {
    href: "/guide/licences",
    label: "Licences et transmission",
    shortLabel: "Licences",
    description: "Licences contractuelles, obligatoires, d'office, cession.",
    icon: Users,
    step: 7,
  },
  {
    href: "/guide/contrefacon",
    label: "Contrefaçon et frontières",
    shortLabel: "Contrefaçon",
    description: "Sanctions, preuve, mesures douanières.",
    icon: Gavel,
    step: 8,
  },
];

export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/guide", label: "Le parcours" },
  { href: "/loi", label: "Texte de loi" },
  { href: "/faq", label: "FAQ" },
  { href: "/checklist", label: "Checklist" },
];

export type CourseStep = {
  slug: string;
  title: string;
  href: string;
  summary: string;
};

export const courseSteps: CourseStep[] = [
  {
    slug: "comprendre",
    title: "Comprendre le brevet",
    href: "/guide/comprendre",
    summary: "Identifier l'invention et son titulaire.",
  },
  {
    slug: "brevetabilite",
    title: "Vérifier la brevetabilité",
    href: "/guide/brevetabilite",
    summary: "Nouveauté, activité inventive, application industrielle.",
  },
  {
    slug: "depot",
    title: "Préparer le dossier",
    href: "/guide/depot",
    summary: "Réunir les pièces exigées et choisir la langue.",
  },
  {
    slug: "examen",
    title: "Déposer et suivre l'examen",
    href: "/guide/examen",
    summary: "Répondre aux notifications et attendre la publication.",
  },
  {
    slug: "couts",
    title: "Payer les redevances",
    href: "/guide/couts",
    summary: "Dépôt, revendications, priorité et annuités.",
  },
  {
    slug: "droits",
    title: "Exploiter et défendre le brevet",
    href: "/guide/droits",
    summary: "Droit exclusif, obligations et déchéance.",
  },
  {
    slug: "licences",
    title: "Conclure une licence",
    href: "/guide/licences",
    summary: "Licences contractuelles, obligatoires ou d'office.",
  },
  {
    slug: "contrefacon",
    title: "Agir en contrefaçon",
    href: "/guide/contrefacon",
    summary: "Preuves, sanctions et mesures douanières.",
  },
];
