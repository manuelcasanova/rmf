import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};


const AppContextProvider = ({ children }) => {
  // Common variables for the entire application


  const fullTips = 100
  const assistantTips = 40
  const kidsPizzaPrice = 25
  const adultsPizzaPrice = 40
  const adultsCocktailPrice = 25
  const fieldTripPrice = 12.19
  const pizzaTipsPercent = 10
  const kitchenTipsPercent = 30
  const frontTipsPercent = 70

  const [toggle, setToggle] = useState(false);
  const [showData, setShowData] = useState(false)

  const handleToggle = () => {
    setToggle(prev => !prev)
  }



  const [hundred, setHundred] = useState(0);
  const [fifty, setFifty] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);
  const [two, setTwo] = useState(0);
  const [one, setOne] = useState(0);
  const [quarter, setQuarter] = useState(0);
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

  const [cashCounted, setCashCounted] = useState(0);
  const [receipts, setReceipts] = useState(0);
  const totalCash = cash > 0 ? parseFloat(cash) + parseFloat(receipts) : parseFloat(cashCounted) + parseFloat(receipts);

  const [float, setFloat] = useState(0);
  const [cashSales, setCashSales] = useState(0);


  const cashTips = (
    cash > 0
      ? (parseFloat(cash) + parseFloat(receipts) - parseFloat(cashSales) - parseFloat(float)).toFixed(2)
      : (parseFloat(cashCounted) + parseFloat(receipts) - parseFloat(cashSales) - parseFloat(float)).toFixed(2)
  );

  const [creditCardTips, setCreditCardTips] = useState(0)
  const totalTips = parseFloat(cashTips) + parseFloat(creditCardTips)
  const [pizzaAdults, setPizzaAdults] = useState(0)
  const [cocktailAdults, setCocktailAdults] = useState(0)
  const [pizzaChildren, setPizzaChildren] = useState(0)
  const [fieldTrip, setFieldTrip] = useState(0)
  const [pizzaServers, setPizzaServers] = useState(0)
  const pizzaTips =
    (parseFloat(pizzaChildren) * kidsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(pizzaAdults) * adultsPizzaPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(cocktailAdults) * adultsCocktailPrice * pizzaTipsPercent / 100)
    +
    (parseFloat(fieldTrip) * fieldTripPrice * pizzaTipsPercent / 100)

  const tipsAfterPizzaParty = (totalTips - pizzaTips).toFixed(2)
  const kitchenTips = (tipsAfterPizzaParty * kitchenTipsPercent / 100).toFixed(2);
  const frontTips = (tipsAfterPizzaParty * frontTipsPercent / 100).toFixed(2);


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
    clearInstructors()
  }

  const showRedLine = () => {
    // e.preventDefault();
    setRedLine(prev => !prev)
  }



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

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  }


  const clearAll = () => {
    setCashCounted(0);
    setReceipts(0);
    setFloat(0);
    setCashSales(0);
    setCreditCardTips(0)
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
    setCreditCardTips(500)
    setPizzaAdults(10);
    setPizzaChildren(10);
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
    setInstructor2Children(10)
  }


  return (
    <AppContext.Provider value={{
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
      cashTips,
      creditCardTips, setCreditCardTips,
      totalTips,
      pizzaAdults, setPizzaAdults,
      cocktailAdults, setCocktailAdults,
      pizzaChildren, setPizzaChildren,
      fieldTrip, setFieldTrip,
      pizzaServers,
      pizzaTips,
      tipsAfterPizzaParty,
      kitchenTips,
      frontTips,
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
