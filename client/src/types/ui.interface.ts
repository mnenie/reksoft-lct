import type { Component } from 'vue';

export interface Link {
  id: string;
  title: string;
  label?: string;
  icon: Component;
  path: string;
}
