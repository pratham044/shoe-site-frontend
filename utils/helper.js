export const getDiscount =  (originalPrice , DiscountedPrice) => {
    const dis = originalPrice - DiscountedPrice ;

    const disPercentage = (dis/originalPrice) * 100 ;
    return disPercentage.toFixed(2);
}
