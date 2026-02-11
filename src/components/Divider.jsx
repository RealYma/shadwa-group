export default function Divider({ text, icon }) {
  return (
    <div className="w-full max-w-4xl flex items-center my-12 px-4">
      <div className="flex-grow border-t border-gray-300"></div>
      
      {(text || icon) && (
        <div className="mx-4 flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          {text && <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{text}</span>}
        </div>
      )}
      
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}