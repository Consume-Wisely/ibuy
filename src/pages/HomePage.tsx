import { TopMenu } from "../components/shared/TopMenu/TopMenu"

export const HomePage = () => {
  return (
    <div className="app-page">
      <TopMenu />
      <div className="app-indent-top-16">
        <img src='resources/icons/ibuy-logo.png' alt='IBuy Logo' 
          height={300}/>
      </div>
    </div>
  )
}