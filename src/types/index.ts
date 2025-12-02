/*
 *copyright 2025 HazemSoltan
 *Licensed under the Apache License, Version 2.0 (the "License");
 */
import type { JSX } from 'react';

export type ProjectType = {
  id: string;
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  description?: string;
  techStack?: string[];
  videoLink?: string;
  gallery?: string[];
  github?: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  projects: string;
  icon: JSX.Element;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};
