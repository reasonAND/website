// eslint-disable-next-line react/prop-types
const ThemeToggle = ({ onToggle, isDarkTheme }) => {
        return (
          <button
            className={`ac-logo flex items-center px-2 py-[4.5px] mr-3 
            ${isDarkTheme ? 'bg-white text-black hover:bg-slate-300' : 'bg-black text-white hover:bg-slate-700' }
            border-white/60 border-[1px] rounded`}
            onClick={onToggle}
          >
            {isDarkTheme ? 'Light' : 'Dark'}
          </button>
        );
}

export default ThemeToggle