import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions =  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 290,
          "features": [
            "Access to cardio equipment",
            "Use of weightlifting area",
            "Locker room access",
            "Free towel service",
            "Staff assistance during business hours"
          ]
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "price": 490,
          "features": [
            "All features of Basic Membership",
            "Access to group fitness classes",
            "Sauna and steam room access",
            "Personalized fitness assessment",
            "Discounts on personal training sessions",
            "Personalized fitness assessment",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "price": 790,
          "features": [
            "All features of Silver Membership",
            "Unlimited tanning sessions",
            "Access to exclusive VIP lounge",
            "Complimentary protein shakes",
            "24/7 gym access",
            "24/7 gym access"
          ]
        }
      ]
      
    return (
        <div>
             <h1 className="text-4xl font-bold text-pink-800">Best Price in the town : </h1>
             <div className="grid lg:grid-cols-3 gap-10 mt-6 mx-6">
                {
                  priceOptions.map((option,idx) => 
                  <PriceOption 
                  key={idx} 
                  option={option}></PriceOption>)
                }
             </div>
        </div>
    );
};

export default PriceOptions;