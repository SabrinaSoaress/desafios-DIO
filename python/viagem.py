preco_combustivel = 6.17
preco_gasolina = 6.17
preco_etanol = 4.40

km_por_litro = 10
distancia_em_km = 100

tipo_combustivel = 'Etanol'

litros_consumidos = distancia_em_km / km_por_litro
valor_gasto = litros_consumidos * preco_combustivel

print(f'Você vai gastar R$ {valor_gasto:.2f} para percorrer {distancia_em_km}Km')

if tipo_combustivel == 'Gasolina':
    valor_viagem = preco_gasolina * distancia_em_km
    print(f'Com Gasolina vai custar {valor_viagem:.2f}')
elif tipo_combustivel == 'Etanol':
    valor_viagem = preco_etanol * distancia_em_km
    print(f'Com Etanol vai custar {valor_viagem:.2f}')
else:
    print('Não identificamos o seu tipo de combustível')
