import { Calculadora } from "../components/calculadora";

export interface Display {
  displayValorActual: HTMLElement | null;
  displayValorAnterior: HTMLElement | null;
  calculador: Calculadora;
  tipoOperacion: string | undefined;
  valorActual: string;
  valorAnterior: string;
  signos: Record<string, string>;
  borrar(): void;
  borrarTodo(): void;
  computar(tipo: string): void;
  agregarNumero(numero: string): void;
  imprimirValores(): void;
  calcular(): void;
  porcentaje(): void;
  raiz(): void;
}
