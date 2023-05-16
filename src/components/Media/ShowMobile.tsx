const ShowMobile = ({ children, className }) => {
  return (
    <div className={`sm:hidden ${className}`}>
      {children}
    </div>
  )
}

export default ShowMobile;
