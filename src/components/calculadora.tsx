import { Card } from "antd";
import React, { useEffect } from "react";
import imagenes from "../styles/img/imagenes";
import { Display } from "../interfaces/calculadora";

export class Calculadora {
  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  restar(num1: number, num2: number): number {
    return num1 - num2;
  }

  dividir(num1: number, num2: number): number {
    return num1 / num2;
  }

  multiplicar(num1: number, num2: number): number {
    return num1 * num2;
  }

  porcentaje(num: number): number {
    return num / 100;
  }

  raiz(num: number): number {
    return Math.sqrt(num);
  }
}

const CalculadoraComponent: React.FC = () => {
  useEffect(() => {
    let displayValorAnterior: HTMLElement | null =
      document.getElementById("valor-anterior");
    let displayValorActual: HTMLElement | null =
      document.getElementById("valor-actual");
    const botonesNumeros = document.querySelectorAll(".numero");
    const botonesOperadores = document.querySelectorAll(".operador");

    const display: Display = {
      displayValorActual,
      displayValorAnterior,
      calculador: new Calculadora(),
      tipoOperacion: undefined,
      valorActual: "",
      valorAnterior: "",
      signos: {
        sumar: "+",
        dividir: "÷",
        multiplicar: "x",
        restar: "-",
      },
      borrar() {
        this.valorActual = this.valorActual.slice(0, -1);
        this.imprimirValores();
      },
      borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
      },
      computar(tipo) {
        if (this.tipoOperacion !== "igual") {
          this.calcular();
        }
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
      },
      agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return;
        this.valorActual += numero;
        this.imprimirValores();
      },
      imprimirValores() {
        if (this.displayValorActual && this.displayValorAnterior) {
          this.displayValorActual.textContent = this.valorActual;
          this.displayValorAnterior.textContent = `${this.valorAnterior} ${
            this.signos[this.tipoOperacion as keyof typeof this.signos] || ""
          }`;
        }
      },
      calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;

        this.valorActual = this.calculador[
          this.tipoOperacion as keyof Calculadora
        ](valorAnterior, valorActual).toString();
      },
      porcentaje() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = this.calculador.porcentaje(valorActual).toString();
        this.imprimirValores();
      },
      raiz() {
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual)) return;
        this.valorActual = this.calculador.raiz(valorActual).toString();
        this.imprimirValores();
      },
    };

    botonesNumeros.forEach((boton) => {
      boton.addEventListener("click", () =>
        display.agregarNumero((boton as HTMLElement).innerHTML)
      );
    });

    botonesOperadores.forEach((boton) => {
      boton.addEventListener("click", () =>
        display.computar((boton as HTMLButtonElement).value)
      );
    });
    const botonPorcentaje = document.querySelector(
      ".operador[value='porcentaje']"
    );
    if (botonPorcentaje) {
      botonPorcentaje.addEventListener(
        "click",
        display.porcentaje.bind(display)
      );
    }

    const botonRaiz = document.querySelector(".operador[value='raiz']");
    if (botonRaiz) {
      botonRaiz.addEventListener("click", display.raiz.bind(display));
    }

    return () => {
      botonesNumeros.forEach((boton) => {
        boton.removeEventListener("click", () =>
          display.agregarNumero((boton as HTMLElement).innerHTML)
        );
      });

      botonesOperadores.forEach((boton) => {
        boton.removeEventListener("click", () =>
          display.computar((boton as HTMLButtonElement).value)
        );
      });
      if (botonPorcentaje) {
        botonPorcentaje.removeEventListener(
          "click",
          display.porcentaje.bind(display)
        );
      }
      if (botonRaiz) {
        botonRaiz.removeEventListener("click", display.raiz.bind(display));
      }
    };
  }, []);

  return (
    <>
      <section className="calculator">
        <div className="calculator-box">
          <div className="calculator-royal">
            <div className="calculator-royal-top">
              <div className="calculator-etiq">
                <p className="p-royal">ROYAL</p>
                <p className="p-r">®</p>
                <p className="p-ce250">CE250/XE48</p>
                <span className="calculator-span">TWO WAY POWER</span>
                <div>
                  <p className="p-12">12</p>
                  <p className="p-digit">DIGIT</p>
                </div>
              </div>
              <div className="calculator-royal-display">
                <div id="valor-actual">123</div>
                <div id="valor-anterior">456</div>
              </div>
            </div>
            <div className="calculator-royal-down">
              <div className="calculator-left">
                <button type="button" className="numero3">
                  MRC
                </button>
                <button type="button" className="numero3">
                  M≡
                </button>
                <button type="button" className="numero3">
                  M+=
                </button>
                <br />
                <button type="button" className="operador">
                  ⟶
                </button>
                <button type="button" className="operador">
                  GT
                </button>
                <button type="button" className="operador">
                  +/-
                </button>
                <br />
                <button type="button" className="numero">
                  7
                </button>
                <button type="button" className="numero">
                  8
                </button>
                <button type="button" className="numero">
                  9
                </button>
                <br />
                <button type="button" className="numero">
                  4
                </button>
                <button type="button" className="numero">
                  5
                </button>
                <button type="button" className="numero">
                  6
                </button>
                <br />
                <button type="button" className="numero">
                  1
                </button>
                <button type="button" className="numero">
                  2
                </button>
                <button type="button" className="numero">
                  3
                </button>
                <br />
                <button type="button" className="numero">
                  0
                </button>
                <button type="button" className="numero">
                  00
                </button>
                <button type="button" className="numero">
                  .
                </button>
              </div>
              <div className="calculator-right">
                <img src={imagenes.boton} alt="Boton"></img>
                <br />
                <button type="button" className="numero2">
                  CE
                </button>
                <button type="button" className="numero2">
                  &larr;
                </button>
                <br />
                <button type="button" className="operador" value="porcentaje">
                  %
                </button>
                <button type="button" className="operador" value="raiz">
                  √
                </button>
                <br />
                <button type="button" className="operador" value="multiplicar">
                  x
                </button>
                <button type="button" className="operador" value="restar">
                  -
                </button>
                <br />
                <button type="button" className="operador sum" value="sumar">
                  +
                </button>
                <button type="button" className="operador divi" value="dividir">
                  ÷
                </button>
                <br />
                <button type="button" className="operador equal" value="igual">
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CalculadoraComponent;
