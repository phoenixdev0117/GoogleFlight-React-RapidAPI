// new Date -> year-month-day
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

//2025-02-11T18:34:00 -> Tue, Feb 11
export function formatDate2(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Parse date parts  
  const [year, month, day] = dateString.split('-').map(Number);

  // Zeller's congruence algorithm to find day of week  
  const m = month < 3 ? month + 12 : month;
  const y = month < 3 ? year - 1 : year;
  const h = (day + Math.floor((13 * (m + 1)) / 5) +
    y + Math.floor(y / 4) - Math.floor(y / 100) +
    Math.floor(y / 400)) % 7;

  // Convert to 0-based index for our days array  
  const dayOfWeek = (h + 6) % 7;

  return `${days[dayOfWeek]}, ${months[month - 1]} ${day}`;
}


//2025-02-12T09:00:00, 2025-02-11T18:30:00 -> 14 hr 30 min 
export function calculateTimeDifference(datetime1, datetime2) {
  try {
    // Parse dates  
    const date1 = new Date(datetime1);
    const date2 = new Date(datetime2);

    // Validate dates  
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
      throw new Error('Invalid date format');
    }

    // Calculate difference in milliseconds  
    const diffMs = Math.abs(date1 - date2);

    // Convert to hours and minutes  
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    // Return formatted string  
    return `${hours} hr ${minutes.toString().padStart(2, '0')} min`;
  } catch (error) {
    console.error('Error calculating time difference:', error);
    return 'Invalid datetime format';
  }
}

//2025-02-12T09:00:00, 2025-02-11T18:30:00 -> 1
export function getDateDiff(date1, date2) {
  // Create new dates using only the date part  
  const d1 = new Date(date1.split('T')[0]);
  const d2 = new Date(date2.split('T')[0]);

  // Calculate difference in milliseconds and convert to days  
  const diffTime = Math.abs(d1 - d2);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

//2025-02-11T18:30:00 -> 06:00 PM
export function formatTimeManual(dateString) {
  // Extract time part  
  const time = dateString.split('T')[1].split(':');
  let hours = parseInt(time[0]);
  const minutes = time[1];
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24h to 12h format  
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12  

  return `${hours}:${minutes} ${ampm}`;
} 

export function getWeight() {
  return Math.floor(Math.random() * (700 - 500 + 1)) + 500;
}