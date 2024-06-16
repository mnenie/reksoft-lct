import type { Component } from 'vue';

export interface Link {
  id: string;
  title: string;
  label?: string;
  icon: Component;
  path: string;
}

export interface Activity {
  name: string;
  news_per_month: number;
}

export interface Chat {
  id: string;
  url: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string | Promise<string>;
}
