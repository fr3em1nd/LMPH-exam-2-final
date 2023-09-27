export function calculateAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function calculateYearsMonthsHired(dateString) {
    const today = new Date();
    const hiredDate = new Date(dateString);
    let years = today.getFullYear() - hiredDate.getFullYear();
    let months = today.getMonth() - hiredDate.getMonth();
    
    if (today.getDate() < hiredDate.getDate()) {
        months--;
    }
    
    if (months < 0) {
        years--;
        months += 12;  // Correcting the months
    }
    
    return {
        years: years<0? 0: years,
        months: months<0? 0: months
    };
}
