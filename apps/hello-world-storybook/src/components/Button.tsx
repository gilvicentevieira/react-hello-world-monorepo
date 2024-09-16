interface Props {
  label: string;
  handleClick: () => void;
  size?: 'small' | 'medium' | 'large';  // Optional size prop
}

const Button = ({ label, handleClick, size = 'medium' }: Props) => {
  let sizeClass = '';

  switch (size) {
    case 'small':
      sizeClass = 'text-sm py-1 px-2';
      break;
    case 'medium':
      sizeClass = 'text-xl py-2 px-4';
      break;
    case 'large':
      sizeClass = 'text-2xl py-3 px-6';
      break;
  }

  return (
    <button
      onClick={handleClick}
      className={`text-primary bg-blue-400 hover:bg-blue-300 p-2 m-2 rounded-md self-center ${sizeClass}`}
    >
      {label}
    </button>
  );
};

export default Button;