const FormField = (value,name,onChange) => {
  return (
    <div className="w-2/5 h-80 drop-shadow-xl border-x border-b px-3 ">
      <label className="text-indigo-300 text-font-input">População</label>
      <br />
      <input
        className="h-11 w-60 focus:outline-none px-2 text-font-input"
        placeholder="População"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormField;
