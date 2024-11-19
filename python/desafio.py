def calcular_imposto(salario):
    aliquota = 0.00
    if (salario >= 0 and salario <= 1100):
        aliquota = 00.05
    elif (salario >= 1100.01 and salario <= 2500):
        aliquota = 00.10  
    else:
        aliquota = 00.15  
    
    return aliquota * salario

valor_salario = float(input())
valor_beneficios = float(input())

valor_imposto = calcular_imposto(valor_salario)

saida = valor_salario - valor_imposto + valor_beneficios
print(f'{saida:2f}')