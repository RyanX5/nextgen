
interface LinkProps {
    text?: string;
    icon?: React.ReactNode;
    selected?: boolean;
    onClicked?: () => void;
}

export const ServicesLink: React.FC<LinkProps> = ({ text, icon, selected, onClicked }) => {
    return (
        <div

            onClick={onClicked}
            className={`flex gap-2 items-center justify-center z-10 cursor-pointer rounded-t-2xl w-72 py-6 transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${selected ? 'bg-accent/30' : 'hover:bg-accent/10'
                }`}
        >
            {icon}
            <p className="text-base font-medium">{text}</p>
        </div>
    );
};