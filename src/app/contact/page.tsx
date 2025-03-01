export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-12 p-12 text-center">
      {/* Título e Subtítulo */}
      <div>
        <h2 className="text-3xl font-bold text-teal-500 mb-4">
          Entre em contato conosco
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Se você tem alguma dúvida, sugestão ou quer saber mais sobre nossos
          planos, envie uma mensagem e entraremos em contato o mais breve
          possível.
        </p>
      </div>

      {/* Card de Formulário */}
      <div className="bg-gray-800 text-gray-200 p-8 rounded-3xl shadow-lg w-full max-w-lg hover:shadow-2xl transition-all">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Sua mensagem"
              rows={5}
              className="w-full p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors hover:cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
