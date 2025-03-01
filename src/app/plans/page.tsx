import { Card } from "@heroui/card";

export default function Plans() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "50px",
        textAlign: "center", // Centraliza o texto
      }}
    >
      {/* Título e Subtítulo */}
      <div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "10px",
            color: "#00d1b2", // Cor chamativa para o título
          }}
        >
          Escolha o plano ideal para sua empresa
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#aaa", // Cor suave para o subtítulo
            maxWidth: "600px", // Limita a largura do subtítulo
            margin: "0 auto", // Centraliza o subtítulo
          }}
        >
          Temos planos personalizados para empresas de todos os tamanhos.
          Selecione o plano que melhor atende às suas necessidades e cresça com
          a gente.
        </p>
      </div>

      {/* Plano Básico */}
      <Card
        isPressable
        style={{
          width: "300px",
          padding: "30px",
          transition: "all 0.3s ease",
        }}
        className="bg-gray-800 rounded-3xl text-gray-200 shadow-lg hover:shadow-2xl hover:scale-105"
      >
        <h4
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Plano Básico
        </h4>
        <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
          Ideal para empresas iniciantes
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
          <strong>R$ 99,99/mês</strong>
        </p>
      </Card>

      {/* Plano Avançado */}
      <Card
        isPressable
        style={{
          width: "300px",
          padding: "30px",
          transition: "all 0.3s ease",
        }}
        className="bg-blue-600 rounded-3xl text-white shadow-lg hover:shadow-2xl hover:scale-105"
      >
        <h4
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Plano Avançado
        </h4>
        <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
          Perfeito para empresas em crescimento
        </p>
        <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
          <strong>R$ 199,99/mês</strong>
        </p>
      </Card>
    </div>
  );
}
