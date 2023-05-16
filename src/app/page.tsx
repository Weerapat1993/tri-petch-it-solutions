import { Fragment } from "react"
import CardSimple from '../components/Card/CardSimple'
import { ShowDesktop, ShowMobile } from '../components/Media'

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
            <div className="row">
              <div className="col-auto mr-10 mt-10">
                <span className="font-title">01</span>
                <div className="underline"></div>
              </div>
              <div className="col-1">
                <h2 className="font-sub-header">CONNECTION</h2>
              </div>
            </div>
            <div className="font-description">
              Connect with coaches directly, you can ping coaches to view profile.
            </div>
          </div>
        </div>
        <div className="row bg-secondary pt-50">
          <div className="col-1" />
          <div className="col-1">
            <div className="row">
              <div className="col-auto mr-10 mt-10">
                <span className="font-title">02</span>
                <div className="underline"></div>
              </div>
              <div className="col-1">
                <h2 className="font-sub-header-secondary">COLLABORATION</h2>
              </div>
            </div>
            <div className="font-description">
            Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
            </div>
          </div>
        </div>
        <div className="row bg-primary pt-50">
          <div className="col-1" />
          <div className="col-1">
            <div className="row">
              <div className="col-auto mr-10 mt-10">
                <span className="font-title">03</span>
                <div className="underline-white"></div>
              </div>
              <div className="col-1">
                <h2 className="font-sub-header-secondary">GROWTH</h2>
              </div>
            </div>
            <div className="font-description text-white">
            Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="/assets/images/bastketballer.png" className="bastketballer" />
          <div className="flex pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <h1 className="font-header">PLAYERS</h1>
              <div className="row">
                <div className="col-auto mr-10 mt-10">
                  <span className="font-title">01</span>
                  <div className="underline"></div>
                </div>
                <div className="col-1">
                  <h2 className="font-sub-header">CONNECTION</h2>
                </div>
              </div>
              <div className="font-description">
              Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
              </div>
            </div>
          </div>
          <div className="flex bg-secondary pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <div className="row">
                <div className="col-auto mr-10 mt-10">
                  <span className="font-title">02</span>
                  <div className="underline"></div>
                </div>
                <div className="col-1">
                  <h2 className="font-sub-header text-gray">COLLABORATION</h2>
                </div>
              </div>
              <div className="font-description">
              Work with recruiter to increase your chances of finding talented athlete.
              </div>
            </div>
          </div>
          <div className="flex bg-dark pt-50">
            <div className="flex-none w-24"></div>
            <div className="shrink w-128">
              <div className="row">
                <div className="col-auto mr-10 mt-10">
                  <span className="font-title text-primary">03</span>
                  <div className="underline-white"></div>
                </div>
                <div className="col-1">
                  <h2 className="font-sub-header text-gray">GROWTH</h2>
                </div>
              </div>
              <div className="font-description text-white">
                Save your time, recruit proper athlets for your team.
              </div>
            </div>
          </div>
        </div>
      </ShowDesktop>
      <ShowMobile>
        <CardSimple />
      </ShowMobile>
    </Fragment>
  )
}

export default Home