using System;

public class Desafio {

    public static void Main() {

        float valorSalario = float.Parse(Console.ReadLine());
        float valorBeneficios = float.Parse(Console.ReadLine());

        float valorImposto = 0;
        if (valorSalario >= 0 && valorSalario <= 1100) {
            valorImposto = 0.05 * valorSalario;

        } else if ( valorSalario >= 1100.01 && valorSalario <=2500) {
            valorImposto = 0.10 * valorSalario;

        } else {
            valorImposto = 0.15 * valorSalario;
        }

        float saida = valorSalario - valorImposto + valorBeneficios;
        Console.WriteLine(saida.ToString("0.00"));
    }
}