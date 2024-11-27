public class viagem {
    public static void main(String[] args) {
        double precoCombustivel = 6.17;
        double precoGasolina = 6.17;
        double precoEtanol = 4.40;

        int kmPorLitro = 10;
        int distanciaEmKm = 100;

        String tipoCombustivel = "Etanol";

        double litroConsumido = (double) distanciaEmKm / kmPorLitro;
        double valorGasto = litroConsumido * precoCombustivel;

        System.out.println("Você vai gastar R$ " + valorGasto + " para percorrer " + distanciaEmKm + "Km");

        double valorViagem;

        if (tipoCombustivel.equals("Gasolina")) {
            valorViagem = precoGasolina * distanciaEmKm;
            System.out.println("Com Gasolina vai custar " + String.format("%.2f", valorViagem));
        } else if (tipoCombustivel.equals("Etanol")) {
            valorViagem = precoEtanol * distanciaEmKm;
            System.out.println("Com Etanol vai custar " + String.format("%.2f", valorViagem));
        } else {
            System.out.println("Não identificamos o seu tipo de combustível");
        }
    }
}
