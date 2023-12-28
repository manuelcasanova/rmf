export default function DataComponent({ data }) {

  // console.log("data component data", data)

  return (
    <div className="data-component">
      <div className="data-line">
        <div className="data-left">{`Supervisor / Server Tips: `}</div>
        <div className="data-right">{`${data[0]?.fulltips} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Server Support tips: `}</div>
        <div className="data-right">{`${data[0]?.assistanttips} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Adults Pizza Price: `}</div>
        <div className="data-right">{`${data[0]?.adultspizzaprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Adults Cocktail Price: `}</div>
        <div className="data-right">{`${data[0]?.adultscocktailprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Field Trip Price: `}</div>
        <div className="data-right">{`${data[0]?.fieldtripprice} $`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Pizza Party Tips %: `}</div>
        <div className="data-right">{`${data[0]?.pizzatipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Kitchen Tips %: `}</div>
        <div className="data-right">{`${data[0]?.kitchentipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`FOH Tips %: `}</div>
        <div className="data-right">{`${data[0]?.fronttipspercent} %`}</div>
      </div>

      <div className="data-line">
        <div className="data-left">{`Sundays pizza tips per hour: `}</div>
        <div className="data-right">{`${data[0]?.sundayspizzatip} $`}</div>
      </div>



    </div>
  )
}


// const assistantTips = data[0].assistanttips;
// const kidsPizzaPrice = data[0].kidspizzaprice;
// const adultsPizzaPrice = data[0].adultspizzaprice;
// const adultsCocktailPrice = data[0].adultscocktailprice;
// const fieldTripPrice = data[0].fieldtripprice;
// const pizzaTipsPercent = data[0].pizzatipspercent;
// const kitchenTipsPercent = data[0].kitchentipspercent;
// const frontTipsPercent = data[0].fronttipspercent;
// const sundaysPizzaTip = data[0].sundayspizzatip;