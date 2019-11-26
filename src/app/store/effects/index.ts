import {PizzasEffect} from './pizzas.effect';
import { SessionEffect } from './session.effect';
import { RouterEffect } from './router.effect';
import { FormsEffect } from './forms.effect';

export const effects: any[] = [
  PizzasEffect,
  SessionEffect,
  RouterEffect,
  FormsEffect,
];

export * from './pizzas.effect';

