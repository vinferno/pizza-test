import {PizzasEffect} from './pizzas.effect';
import { SessionEffect } from './session.effect';
import { RouterEffect } from './router.effect';

export const effects: any[] = [
  PizzasEffect,
  SessionEffect,
  RouterEffect,
];

export * from './pizzas.effect';

