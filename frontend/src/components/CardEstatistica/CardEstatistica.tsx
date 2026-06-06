interface CardEstatisticaProps {
  titulo: string;
  valor: number;
  descricao: string;
}

const CardEstatistica = ({titulo, valor, descricao}: CardEstatisticaProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-200 rounded-xl p-6">
      <span className="text-sm text-gray-600">{titulo}</span>
      <span className="text-3xl font-bold">{valor}</span>
      <span className="text-xs text-gray-500">{descricao}</span>
    </div>
  );
};

export default CardEstatistica;
