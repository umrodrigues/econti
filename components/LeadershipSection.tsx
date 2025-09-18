import Image from 'next/image';

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            <div className="relative mb-6">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <Image 
                  src={'/couple.jpeg'} 
                  alt="Eduarda Conti e Fernando Barbosa - CEOs da &Conti" 
                  className="object-cover w-full h-full"  
                  width={400} 
                  height={400}
                  priority
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Eduarda Conti e Fernando Barbosa</h3>
              <p className="text-lg text-gray-600 font-medium">CEOs da &Conti</p>
            </div>
          </div>
          
          <div className="flex-1 max-w-3xl">
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Conheça a <span className="text-blue-600">&amp;Conti</span>
              </h2>
              <p className="text-xl text-gray-600">
                Conheçam os nossos líderes! ✨
              </p>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <a 
                  href="https://www.instagram.com/dudacontit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  <strong>@dudacontit</strong>
                </a> nossa <strong className="text-gray-900">𝐅𝐨𝐮𝐧𝐝𝐞𝐫</strong>. Ela quem deu início a todo o processo de construção da empresa, sendo a líder da nossa equipe e elaborando todas as estratégias utilizadas nos perfis de nossos clientes, delegando tarefas, efetuando coleta de conteúdo e ainda comanda o nosso comercial!
              </p>
              <p className="text-lg">
                <a 
                  href="https://www.instagram.com/feer.barbosaa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  <strong>@feer.barbosaa</strong>
                </a> nosso <strong className="text-gray-900">𝗖𝗘𝗢</strong>, empenhou-se em ajudar nossa <strong className="text-gray-900">𝐅𝐨𝐮𝐧𝐝𝐞𝐫</strong> em todos os momentos que foi preciso para dar início a empresa. Seu papel é de extrema importância para o desenvolvimento, ajuda na parte burocrática, comanda as reuniões de alinhamentos e cuida de toda parte do audiovisual de nossos clientes, colabora no desenvolvimento de estratégias, co-lídera nossas iniciativas comerciais, além de videomaker, fotógrafo e as vezes até modelo hahaha.
              </p>
              <p className="text-lg font-medium text-gray-800">
                O que faltou para terem esses líderes cuidando de sua rede social?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
