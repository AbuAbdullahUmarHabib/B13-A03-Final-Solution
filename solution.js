// Problem-01: New Price for Eid Sale

function newPrice(currentPrice, discount) {
  let newPrice = 0;
  if (
    typeof discount === "number" &&
    typeof currentPrice === "number" &&
    discount > 0 &&
    discount < 100
  ) {
    let mrpDiscount = (currentPrice * discount) / 100;
    newPrice = currentPrice - mrpDiscount;
    return newPrice.toFixed(3);
  } else {
    return "Invalid";
  }
}

//Problem-02: OTP Validation for Zapshift

function validOtp(otp) {
  if (otp.length === 8 && typeof otp === "string" && otp.startsWith("ph-")) {
    return true;
  } else if (typeof otp === "object" || typeof otp === "number" || typeof otp === "nul") {
    return "Invalid";
  } else {
    return false;
  }
}

//Problem-03: BCS Final Score Calculator

function finalScore(omr) {
  const marks = omr;
  const totalMark = marks.right + marks.wrong + marks.skip;
  if (typeof marks === "object" && totalMark === 100) {
    let rightPoint = marks.right * 1;
    let wrongPoint = marks.wrong * 0.5;
    let skipPoint = marks.skip + 0;
    let totalPoints = rightPoint - wrongPoint;
    return Math.round(totalPoints);
  } else {
    return "Invalid";
  }
}

//Problem-04: Upcoming Gono Vote

function gonoVote(array) {
  if (Array.isArray(array)) {
    let haVote = 0;
    let naVote = 0;
    for (const vote of array) {
      if (vote === "ha") {
        haVote++;
      }
      if (vote === "na") {
        naVote++;
      }
    }
    if (haVote > naVote) {
      return true; 
    } else if (haVote === naVote) {
      return "equal";
    } else {
      return false; 
    }
  } else {
    return "Invalid";
  }
}

//Problem-05: Text Analyzer for an AI Company

function analyzeText(userText) {
  if (
    typeof userText === "string" &&
    userText.length > 0 &&
    !Array.isArray(userText)
  ) {
    let words = userText.split(" ");
    let bigWord = "";
    for (const word of words) {
      if (word.length > bigWord.length) {
        bigWord = word;
      }
    }
    let token = words.join("");
    let totalToken = token.length;

    let summary = {
      longwords: bigWord,
      token: totalToken,
    };
    return summary;
  } else {
    return "Invalid";
  }
}

