interface Content3Props {
  isDarkMode?: boolean;
}

const Content03: React.FC<Content3Props> = ({ isDarkMode }) => {
  return (
    <div className="p-10">
      <div className="row">
        <div className="col-auto mr-10 mt-10">
          <span className="font-title">03</span>
          <div className={isDarkMode ? 'underline-white' : 'underline'}></div>
        </div>
        <div className="col-1">
          <h2 className="font-sub-header-secondary">GROWTH</h2>
        </div>
      </div>
      <div className={`font-description ${isDarkMode ? 'text-white' : ''}`}>
        Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
      </div>
    </div>
  )
}

Content03.defaultProps = {
  isDarkMode: false
}

export default Content03