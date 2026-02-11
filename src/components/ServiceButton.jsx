export default function ServiceButton({ title , onClick, color = "bg-blue-800" }) {
    return (
        <button
            onClick={onClick}
            className = {`${color} text-white py-4 px-6 rounded-xl text-xl font-bold shadow-lg active:scale-95 transition-transform`}
        >
        {title  }
        </button>
    );
}