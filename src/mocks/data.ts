import { Customer, Process } from "@/types/types";

export const fakeCustomers: Customer[] = [
  {
    id: 1,
    name: "João Gomes",
    email: "joão@email.com",
  },
  {
    id: 2,
    name: "Maria Lurges",
    email: "maria@email.com",
  },
  {
    id: 3,
    name: "Pedro M. Costa",
    email: "pedro@email.com",
  },
  {
    id: 4,
    name: "Ana Júlia Souza",
    email: "ana@email.com",
  },
];

export const fakeProcesses: Process[] = [
  {
    id: 1,
    name: "Processo 1",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 1,
  },
  {
    id: 2,
    name: "Processo 2",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 2,
  },
  {
    id: 3,
    name: "Processo 3",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 3,
  },
  {
    id: 4,
    name: "Processo 4",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 1,
  },
  {
    id: 5,
    name: "Processo 5",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 2,
  },
  {
    id: 6,
    name: "Processo 6",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 1,
  },
  {
    id: 7,
    name: "Processo 7",
    description: `
    **APÓLICE DE SEGURO**

**Seguradora MockSeguros S.A.**  
CNPJ: 00.000.000/0000-00  
Endereço: Rua Fictícia, 123, Centro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: atendimento@mockseguros.com  

---

**DADOS DO SEGURADO**  
Nome: João da Silva  
CPF: 000.000.000-00  
Endereço: Avenida Principal, 456, Bairro, Cidade Exemplo - EX, 00000-000  
Telefone: (00) 0000-0000  
E-mail: joao.silva@email.com  

**DADOS DA APÓLICE**  
Número da Apólice: 1234567890  
Data de Emissão: 01/01/2025  
Vigência: 01/01/2025 a 01/01/2026  
Prêmio Total: R$ 1.200,00  
Forma de Pagamento: Parcelado em 12x de R$ 100,00  

**TIPO DE SEGURO:** Seguro Residencial  
Cobertura: 
- Incêndio, Explosão e Fumaça: R$ 200.000,00  
- Danos Elétricos: R$ 50.000,00  
- Roubo e Furto Qualificado: R$ 30.000,00  
- Responsabilidade Civil Familiar: R$ 100.000,00  

**FRANQUIAS:**
- Danos Elétricos: R$ 500,00
- Roubo e Furto Qualificado: R$ 1.000,00

**CONDIÇÕES GERAIS:**
1. O segurado deve manter a residência em condições adequadas de segurança e manutenção.
2. Em caso de sinistro, o segurado deve comunicar a seguradora no prazo máximo de 7 dias úteis.
3. O não pagamento das parcelas poderá acarretar no cancelamento da apólice.

**ATENDIMENTO AO CLIENTE:**
Central de Atendimento: (00) 0000-0000  
E-mail: suporte@mockseguros.com  
Ouvidoria: (00) 0000-0001  

---

**Assinatura do Segurado:** ______________________  
**Assinatura da Seguradora:** ______________________  

Data: ____/____/____  

---

**Este documento é válido como comprovante da contratação do seguro e deve ser guardado pelo segurado.**
    `,
    customerId: 4,
  },
];
