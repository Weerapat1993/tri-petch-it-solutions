const ShowDesktop = ({ children, className }) => {
  return (
    <div className={`max-sm:hidden ${className}`}>
      {children}
    </div>
  )
}

export default ShowDesktop;
