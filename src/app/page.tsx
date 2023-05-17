import { Fragment } from "react"
import HomePageOnMobile from '../components/Card/HomePageOnMobile'
import { ShowDesktop, ShowMobile } from '../components/Media'
import Content01 from "@/components/Content/Content01"
import Content02 from "@/components/Content/Content02"
import Content03 from "@/components/Content/Content03"
import Content04 from "@/components/Content/Content04"
import Content05 from "@/components/Content/Content05"
import Content06 from "@/components/Content/Content06"

const Home = () => {
  return (
    <Fragment>
      <ShowDesktop>
        <div className="row relative">
          <div className="col-1">
            <img src="/assets/images/footballer.png" className="footballer" />
          </div>
          <div className="col-1">
            <h1 className="font-header">ATHLETS</h1>
            <Content01 />
          </div>
        </div>
        <div className="row bg-secondary pt-50">
          <div className="col-1" />
          <div className="col-1">
            <Content02 />
          </div>
        </div>
        <div className="row bg-primary pt-50">
          <div className="col-1" />
          <div className="col-1">
            <Content03 isDarkMode />
          </div>
        </div>
        <div className="relative">
          <img src="/assets/images/bastketballer.png" className="bastketballer" />
          <div className="flex pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <h1 className="font-header">ATHLETS</h1>
              <Content04 />
            </div>
          </div>
          <div className="flex bg-secondary pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <Content05 />
            </div>
          </div>
          <div className="flex bg-dark pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <Content06 />
            </div>
          </div>
        </div>
      </ShowDesktop>
      <ShowMobile>
        <HomePageOnMobile />
      </ShowMobile>
    </Fragment>
  )
}

export default Home