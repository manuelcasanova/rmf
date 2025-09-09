import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/SubComponents/LoadingSpinner';

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};


const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [color, setColor] = useState("black");
  const [data, setData] = useState([]);
  const BACKEND = 'https://backend.rmf.manucasanova.com'
  //const BACKEND = 'http://localhost:3500'

  const [toggle, setToggle] = useState(false);
  const [showData, setShowData] = useState(false)
  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);
  const [quarter, setQuarter] = useState(0);


  const [cashCounted, setCashCounted] = useState(0);
  const [receipts, setReceipts] = useState(0);

  const [float, setFloat] = useState(0);
  const [cashSales, setCashSales] = useState(0);
  const [cashSalesAM, setCashSalesAM] = useState(0);
  const [cashSalesPrintOut, setCashSalesPrintOut] = useState(0)

  const [creditCardsTipsAM, setCreditCardsTipsAM] = useState(0)
  const [creditCardsTipsPrintOut, setCreditCardsTipsPrintOut] = useState(0)

  const [creditCardsSurchargeAM, setCreditCardsSurchargeAM] = useState(0)
  const [creditCardsSurchargePM, setCreditCardsSurchargePM] = useState(0)
  const [creditCardsSurchargePrintOut, setCreditCardsSurchargePrintOut] = useState(0)


  const [sundaysInfo, setSundaysInfo] = useState(false)


  const [creditCardTips, setCreditCardTips] = useState(0)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [cocktailAdults, setCocktailAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [fieldTrip, setFieldTrip] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const [sundaysServerHours, setSundaysServerHours] = useState(0)

  const [totalCashInfo, setTotalCashInfo] = useState(false)
  const [totalHoursInfo, setTotalHoursInfo] = useState(false)
  const [cashSalesInfo, setCashSalesInfo] = useState(false)
  const [cashTipsInfo, setCashTipsInfo] = useState(false)
  const [creditCardTipsInfo, setCreditCardTipsInfo] = useState(false)
  const [newFloatInfo, setNewFloatInfo] = useState(false)
  const [pizzaParties, setPizzaParties] = useState(false)
  const [supportServerInfo, setSupportServerInfo] = useState(true)
  const [cashCount, setCashCount] = useState(false)


  const [summary, setSummary] = useState(false)
  const [instructors, setInstructors] = useState(false)
  const [redLine, setRedLine] = useState(false)

  const [server1Hours, setServer1Hours] = useState(0);
  const [server2Hours, setServer2Hours] = useState(0);
  const [server3Hours, setServer3Hours] = useState(0);
  const [server4Hours, setServer4Hours] = useState(0);
  const [server5Hours, setServer5Hours] = useState(0);

  const [server1Name, setServer1Name] = useState("");
  const [server2Name, setServer2Name] = useState("");
  const [server3Name, setServer3Name] = useState("");
  const [server4Name, setServer4Name] = useState("");
  const [server5Name, setServer5Name] = useState("");

  const [assistant1Hours, setAssistant1Hours] = useState(0);
  const [assistant2Hours, setAssistant2Hours] = useState(0);
  const [assistant3Hours, setAssistant3Hours] = useState(0);

  const [assistant1Name, setAssistant1Name] = useState("");
  const [assistant2Name, setAssistant2Name] = useState("");
  const [assistant3Name, setAssistant3Name] = useState("");

  const [instructor1Adults, setInstructor1Adults] = useState(0);
  const [instructor2Adults, setInstructor2Adults] = useState(0);
  const [instructor3Adults, setInstructor3Adults] = useState(0);

  const [instructor1Cocktail, setInstructor1Cocktail] = useState(0);
  const [instructor2Cocktail, setInstructor2Cocktail] = useState(0);
  const [instructor3Cocktail, setInstructor3Cocktail] = useState(0);

  const [instructor1Children, setInstructor1Children] = useState(0);
  const [instructor2Children, setInstructor2Children] = useState(0);
  const [instructor3Children, setInstructor3Children] = useState(0);

  const [instructor1FieldTrip, setInstructor1FieldTrip] = useState(0);
  const [instructor2FieldTrip, setInstructor2FieldTrip] = useState(0);
  const [instructor3FieldTrip, setInstructor3FieldTrip] = useState(0);

  const [fullTips, setFullTips] = useState();
  const [assistantTips, setAssistantTips] = useState();
  const [kidsPizzaPrice, setKidsPizzaPrice] = useState();
  const [adultsPizzaPrice, setAdultsPizzaPrice] = useState();
  const [adultsCocktailPrice, setAdultsCocktailPrice] = useState();
  const [fieldTripPrice, setFieldTripPrice] = useState();
  const [pizzaTipsPercent, setPizzaTipsPercent] = useState();
  const [kitchenTipsPercent, setKitchenTipsPercent] = useState();
  const [frontTipsPercent, setFrontTipsPercent] = useState();
  const [sundaysPizzaTip, setSundaysPizzaTip] = useState();

  const defaultPricing = {
    fulltips: 100,
    assistanttips: 40,
    kidspizzaprice: 27,
    adultspizzaprice: 42.5,
    adultscocktailprice: 27,
    fieldtripprice: 12.19,
    pizzatipspercent: 10,
    kitchentipspercent: 30,
    fronttipspercent: 70,
    sundayspizzatip: 5
  };

  useEffect(() => {
    axios.get(`${BACKEND}/data`)
      .then(function (res) {
        setData([...res.data]);
        setLoading(false);

        // Delay setting loading to false by 2 seconds
        //  setTimeout(() => {
        //   setLoading(false);
        // }, 2000);

        // Set state variables using setter functions
        setFullTips(res.data[0].fulltips);
        setAssistantTips(res.data[0].assistanttips);
        setKidsPizzaPrice(res.data[0].kidspizzaprice);
        setAdultsPizzaPrice(res.data[0].adultspizzaprice);
        setAdultsCocktailPrice(res.data[0].adultscocktailprice);
        setFieldTripPrice(res.data[0].fieldtripprice);
        setPizzaTipsPercent(res.data[0].pizzatipspercent);
        setKitchenTipsPercent(res.data[0].kitchentipspercent);
        setFrontTipsPercent(res.data[0].fronttipspercent);
        setSundaysPizzaTip(res.data[0].sundayspizzatip);
      })


      // Fallback default values in case of error
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);

        // Apply fallback values
        setFullTips(defaultPricing.fulltips);
        setAssistantTips(defaultPricing.assistanttips);
        setKidsPizzaPrice(defaultPricing.kidspizzaprice);
        setAdultsPizzaPrice(defaultPricing.adultspizzaprice);
        setAdultsCocktailPrice(defaultPricing.adultscocktailprice);
        setFieldTripPrice(defaultPricing.fieldtripprice);
        setPizzaTipsPercent(defaultPricing.pizzatipspercent);
        setKitchenTipsPercent(defaultPricing.kitchentipspercent);
        setFrontTipsPercent(defaultPricing.fronttipspercent);
        setSundaysPizzaTip(defaultPricing.sundayspizzatip);
      });
  }, []);


  const handleToggle = () => {
    setToggle(!toggle);
  }

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  }



  let cash =
    (
      parseFloat(hundred * 100) +
      parseFloat(fifty * 50) +
      parseFloat(twenty * 20) +
      parseFloat(ten * 10) +
      parseFloat(five * 5) +
      parseFloat(two * 2) +
      parseFloat(one * 1) +
      parseFloat(quarter * 0.25)
    ).toFixed(2);

  const totalCash = cash > 0 ? parseFloat(cash) + parseFloat(receipts) : parseFloat(cashCounted) + parseFloat(receipts);


  const cashSalesPM = (cashSalesPrintOut - cashSalesAM).toFixed(2)


  const cashTips = (
    cash > 0
      ? (parseFloat(cash) + parseFloat(receipts) - parseFloat(cashSales) - parseFloat(float)).toFixed(2)
      : (parseFloat(cashCounted) + parseFloat(receipts) - parseFloat(cashSales) - parseFloat(float)).toFixed(2)
  );

  const cashTipsPM = (
    cash > 0
      ? (parseFloat(cash) + parseFloat(receipts) - parseFloat(cashSalesPM) - parseFloat(float)).toFixed(2)
      : (parseFloat(cashCounted) + parseFloat(receipts) - parseFloat(cashSalesPM) - parseFloat(float)).toFixed(2)
  );



  const totalTipsAndSurcharge = parseFloat(cashTips) + parseFloat(creditCardsTipsAM)
  const totalTipsAndSurchargePM = roundToTwo((roundToTwo(cashTipsPM) + roundToTwo(creditCardsTipsPrintOut) - roundToTwo(creditCardsTipsAM)))

  const totalTipsAM = parseFloat(cashTips) + parseFloat(creditCardsTipsAM) - parseFloat(creditCardsSurchargeAM)
  const totalTipsPM = roundToTwo(
    (
      roundToTwo(cashTipsPM)
      + roundToTwo(creditCardsTipsPrintOut)
      - roundToTwo(creditCardsTipsAM)
      - roundToTwo(creditCardsSurchargePM)
      + roundToTwo(creditCardsSurchargeAM)
    )
  )


  const pizzaTips =

    (parseFloat(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    parseFloat(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100
    +
    (parseFloat(cocktailAdults) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(sundaysServerHours) * sundaysPizzaTip)
    +
    (parseFloat(fieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  const tipsAfterPizzaParty = (totalTipsAndSurcharge - creditCardsSurchargeAM - pizzaTips).toFixed(2)
  const tipsAfterPizzaPartyPM = (totalTipsAndSurchargePM - creditCardsSurchargePM - pizzaTips).toFixed(2) //HERE




  const kitchenTips = (tipsAfterPizzaParty * kitchenTipsPercent / 100).toFixed(2);
  const kitchenTipsPM = (tipsAfterPizzaPartyPM * kitchenTipsPercent / 100).toFixed(2);

  const frontTips = (tipsAfterPizzaParty * frontTipsPercent / 100).toFixed(2);


  const frontTipsPM = (tipsAfterPizzaPartyPM * frontTipsPercent / 100).toFixed(2);

  const showTotalCashInfo = (e) => {
    e.preventDefault();
    setTotalCashInfo(prev => !prev)
  }

  const showTotalHoursInfo = (e) => {
    e.preventDefault();
    setTotalHoursInfo(prev => !prev)
  }

  const showCashSalesInfo = (e) => {
    e.preventDefault();
    setCashSalesInfo(prev => !prev)
  }

  const showCashTipsInfo = (e) => {
    e.preventDefault();
    setCashTipsInfo(prev => !prev)
  }

  const showCreditCardTipsInfo = (e) => {
    e.preventDefault();
    setCreditCardTipsInfo(prev => !prev)
  }

  const showNewFloatInfo = (e) => {
    e.preventDefault();
    setNewFloatInfo(prev => !prev)
  }

  const showPizzaParties = (e) => {
    e.preventDefault();
    setPizzaParties(prev => !prev)
  }


  const showCashCount = (e) => {
    e.preventDefault();
    setCashCount(prev => !prev)
    setHundred(0)
    setFifty(0)
    setTwenty(0)
    setTen(0)
    setFive(0)
    setTwo(0)
    setOne(0)
    setQuarter(0)
    setCashCounted(0)
  }

  const showSupportServerInfo = (e) => {
    e.preventDefault();
    setSupportServerInfo(prev => !prev)
  }


  const showSummary = () => {
    // e.preventDefault();
    setSummary(prev => !prev)
  }

  const showInstructors = () => {
    // e.preventDefault();
    setInstructors(prev => !prev)
    // clearInstructors()
  }

  const showRedLine = () => {
    // e.preventDefault();
    setRedLine(prev => !prev)
  }


  const showSundaysInfo = (e) => {
    e.preventDefault();
    setSundaysInfo(prev => !prev)
  }

  const totalInstructor1 = parseFloat(
    (parseFloat(instructor1Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor1FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  ).toFixed(2)

  const totalInstructor3 = parseFloat(
    (parseFloat(instructor3Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor3Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor3Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor3FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  ).toFixed(2)

  const totalInstructor2 = parseFloat(
    (parseFloat(instructor2Adults) * adultsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor2Cocktail) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor2Children) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(instructor2FieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  ).toFixed(2)

  const totalInstructors = parseFloat(totalInstructor1) + parseFloat(totalInstructor2) + parseFloat(totalInstructor3)

  const totalHours = parseFloat(server1Hours) + parseFloat(server2Hours) + parseFloat(server3Hours) + parseFloat(server4Hours) + parseFloat(server5Hours) + parseFloat(assistant1Hours) * assistantTips / 100 + parseFloat(assistant2Hours) * assistantTips / 100 + parseFloat(assistant3Hours) * assistantTips / 100;

  const tipsPerHour = () => {
    if (isNaN(frontTips / totalHours)) {
      return 0
    } else {
      return frontTips / totalHours
    }
  }


  const tipsPerHourPM = () => {
    if (isNaN(frontTipsPM / totalHours)) {
      return 0
    } else {
      return frontTipsPM / totalHours
    }
  }




  const clearAll = () => {
    setCashCounted(0);
    setReceipts(0);
    setFloat(0);
    setCashSales(0);
    setCashSalesAM(0);
    setCreditCardsTipsAM(0);
    setCashSalesPrintOut(0);
    setCreditCardsTipsPrintOut(0);
    setPizzaAdults(0);
    setPizzaChildren(0);
    setPizzaServers(0)
    setServer1Name("");
    setServer2Name("");
    setServer3Name("");
    setServer4Name("");
    setServer5Name("");
    setAssistant1Name("");
    setAssistant2Name("");
    setAssistant3Name("");
    setServer1Hours(0);
    setServer2Hours(0);
    setServer3Hours(0);
    setServer4Hours(0);
    setServer5Hours(0);
    setAssistant1Hours(0);
    setAssistant2Hours(0);
    setAssistant3Hours(0);
    setHundred(0);
    setFifty(0);
    setTwenty(0);
    setTen(0);
    setFive(0);
    setTwo(0);
    setOne(0);
    setQuarter(0);
    setPizzaAdults(0);
    setCocktailAdults(0);
    setPizzaChildren(0);
    setFieldTrip(0);
    setPizzaServers(0);
    setInstructor1Adults(0);
    setInstructor2Adults(0);
    setInstructor3Adults(0);
    setInstructor1Cocktail(0);
    setInstructor2Cocktail(0);
    setInstructor3Cocktail(0);
    setInstructor1Children(0);
    setInstructor2Children(0);
    setInstructor3Children(0);
    setInstructor1FieldTrip(0);
    setInstructor2FieldTrip(0);
    setInstructor3FieldTrip(0);
    showInstructors();
    setPizzaParties(prev => !prev)

  }

  const clearServers = () => {
    setServer1Name("");
    setServer2Name("");
    setServer3Name("");
    setServer4Name("");
    setServer5Name("");
    setAssistant1Name("");
    setAssistant2Name("");
    setAssistant3Name("");
    setServer1Hours(0);
    setServer2Hours(0);
    setServer3Hours(0);
    setServer4Hours(0);
    setServer5Hours(0);
    setAssistant1Hours(0);
    setAssistant2Hours(0);
    setAssistant3Hours(0);
    setInstructor1Adults(0);
    setInstructor2Adults(0);
    setInstructor3Adults(0);
    setInstructor1Cocktail(0);
    setInstructor2Cocktail(0);
    setInstructor3Cocktail(0);
    setInstructor1Children(0);
    setInstructor2Children(0);
    setInstructor3Children(0);
    setInstructor1FieldTrip(0);
    setInstructor2FieldTrip(0);
    setInstructor3FieldTrip(0);
  }

  const clearInstructors = () => {
    setInstructor1Adults(0);
    setInstructor2Adults(0);
    setInstructor3Adults(0);
    setInstructor1Cocktail(0);
    setInstructor2Cocktail(0);
    setInstructor3Cocktail(0);
    setInstructor1Children(0);
    setInstructor2Children(0);
    setInstructor3Children(0);
    setInstructor1FieldTrip(0);
    setInstructor2FieldTrip(0);
    setInstructor3FieldTrip(0);
  }


  const test = () => {
    setCashCounted(990);
    setReceipts(10);
    setFloat(400);
    setCashSales(500);
    setCashSalesAM(500);
    setCashSalesPrintOut(1000);
    setCreditCardTips(500);
    setCreditCardsTipsAM(200);
    setCreditCardsTipsPrintOut(800);
    setPizzaAdults(7);
    setPizzaChildren(9);
    setCocktailAdults(9);
    setFieldTrip(9);
    setPizzaServers(2)
    setServer1Name("Manuel");
    setServer2Name("Dom");
    setServer3Name("Suz");
    setAssistant1Name("Jasmine");
    setServer1Hours(5);
    setServer2Hours(5);
    setServer3Hours(4);
    setAssistant1Hours(4);
    setInstructor1Adults(10);
    setInstructor2Children(10);
    // setSundaysServerHours(3)
    setInstructor1Adults(0);
    setInstructor1Children(3);
    setInstructor1Cocktail(3);
    setInstructor1FieldTrip(3);
    setInstructor2Adults(3);
    setInstructor2Children(3);
    setInstructor2Cocktail(3);
    setInstructor2FieldTrip(3);
    setInstructor3Adults(3);
    setInstructor3Children(3);
    setInstructor3Cocktail(3);
    setInstructor3FieldTrip(3);
    showInstructors(prev => !prev)
    setPizzaParties(prev => !prev)
  }

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  // if (error) {
  //   return <div className="error-text">Error: {error.message}</div>;
  // }

  return (
    <AppContext.Provider value={{
      BACKEND,
      data, setData,
      color, setColor,
      showData, setShowData,
      fullTips,
      assistantTips,
      kidsPizzaPrice,
      adultsPizzaPrice,
      adultsCocktailPrice,
      fieldTripPrice,
      pizzaTipsPercent,
      kitchenTipsPercent,
      frontTipsPercent,
      toggle, setToggle,
      handleToggle,
      hundred, setHundred,
      fifty, setFifty,
      twenty, setTwenty,
      ten, setTen,
      five, setFive,
      two, setTwo,
      one, setOne,
      quarter, setQuarter,
      cash, cashCounted,
      setCashCounted,
      receipts, setReceipts,
      totalCash,
      float, setFloat,
      cashSales, setCashSales,
      cashSalesAM, setCashSalesAM,
      cashSalesPrintOut, setCashSalesPrintOut,
      cashSalesPM,
      cashTips, cashTipsPM,
      creditCardTips, setCreditCardTips,
      creditCardsTipsAM, setCreditCardsTipsAM,
      creditCardsTipsPrintOut, setCreditCardsTipsPrintOut,
      creditCardsSurchargeAM, setCreditCardsSurchargeAM,
      creditCardsSurchargePM, setCreditCardsSurchargePM,
      creditCardsSurchargePrintOut, setCreditCardsSurchargePrintOut,
      totalTipsAndSurcharge,
      totalTipsAndSurchargePM,
      totalTipsAM,
      totalTipsPM,
      pizzaAdults, setPizzaAdults,
      cocktailAdults, setCocktailAdults,
      pizzaChildren, setPizzaChildren,
      fieldTrip, setFieldTrip,
      pizzaServers,
      pizzaTips,
      sundaysPizzaTip,
      tipsAfterPizzaParty,
      tipsAfterPizzaPartyPM,
      kitchenTips,
      kitchenTipsPM,
      frontTips,
      frontTipsPM,
      totalCashInfo, setTotalCashInfo,
      totalHoursInfo, setTotalHoursInfo,
      cashSalesInfo, setCashSalesInfo,
      cashTipsInfo, setCashTipsInfo,
      creditCardTipsInfo, setCreditCardTipsInfo,
      newFloatInfo, setNewFloatInfo,
      pizzaParties, setPizzaParties,
      supportServerInfo, setSupportServerInfo,
      cashCount, setCashCount,
      summary, setSummary,
      instructors, setInstructors,
      redLine, setRedLine,
      showTotalCashInfo,
      showTotalHoursInfo,
      showCashSalesInfo,
      showCashTipsInfo,
      showCreditCardTipsInfo,
      showNewFloatInfo,
      showPizzaParties,
      showCashCount,
      showSupportServerInfo,
      showSummary,
      showInstructors,
      showRedLine,
      sundaysInfo,
      showSundaysInfo,
      server1Hours, setServer1Hours,
      server2Hours, setServer2Hours,
      server3Hours, setServer3Hours,
      server4Hours, setServer4Hours,
      server5Hours, setServer5Hours,
      server1Name, setServer1Name,
      server2Name, setServer2Name,
      server3Name, setServer3Name,
      server4Name, setServer4Name,
      server5Name, setServer5Name,
      assistant1Hours, setAssistant1Hours,
      assistant2Hours, setAssistant2Hours,
      assistant3Hours, setAssistant3Hours,
      assistant1Name, setAssistant1Name,
      assistant2Name, setAssistant2Name,
      assistant3Name, setAssistant3Name,
      sundaysServerHours, setSundaysServerHours,
      instructor1Adults, setInstructor1Adults,
      instructor2Adults, setInstructor2Adults,
      instructor3Adults, setInstructor3Adults,
      instructor1Cocktail, setInstructor1Cocktail,
      instructor2Cocktail, setInstructor2Cocktail,
      instructor3Cocktail, setInstructor3Cocktail,
      instructor1Children, setInstructor1Children,
      instructor2Children, setInstructor2Children,
      instructor3Children, setInstructor3Children,
      instructor1FieldTrip, setInstructor1FieldTrip,
      instructor2FieldTrip, setInstructor2FieldTrip,
      instructor3FieldTrip, setInstructor3FieldTrip,
      totalInstructor1,
      totalInstructor2,
      totalInstructor3,
      totalInstructors,
      totalHours,
      tipsPerHour,
      tipsPerHourPM,
      roundToTwo,
      clearAll,
      clearServers,
      clearInstructors,
      test
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
