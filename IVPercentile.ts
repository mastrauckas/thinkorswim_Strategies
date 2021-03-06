declare lower;

input TimeFrame = {FiveYear, ThreeYear, OneYear, SixMonths, ThreeMonths, default OneMonth, TenDays, FiveDays};

# 5 Year
input ShowFiveYearLabel = yes;

# 3 Year
input ShowThreeYearLabel = yes;

# 1 Year
input ShowOneYearLabel = yes;

# 6 Months
input ShowSixMonthsLabel = yes;

# 3 Months
input ShowThreeMonthsLabel = yes;

# 1 Month
input ShowOneMonthLabel = yes;

# 10 Day
input ShowTenDaysLabel = yes;

# 5 Day
input ShowFiveDaysLabel = yes;

def year = 252;
def lowPoint = 0.00;
def midPoint = 0.50;
def highPoint = 1.00;

plot lowPointPlot = lowPoint;
lowPointPlot.SetLineWeight(1);
lowPointPlot.SetDefaultColor(Color.LIGHT_RED);

plot midPointPlot = midPoint;
midPointPlot.SetLineWeight(1);
midPointPlot.SetDefaultColor(Color.LIGHT_RED);

plot highPointPlot = highPoint;
highPointPlot.SetLineWeight(1);
highPointPlot.SetDefaultColor(Color.LIGHT_RED);

def iv = ImpVolatility();

# 5 Years
def fiveYearHigh = Highest(iv, year * 5);
def fiveYearLow = Lowest(iv, year * 5);

plot percentFiveYear = (iv - fiveYearLow) / (fiveYearHigh - fiveYearLow);
percentFiveYear.SetHiding(TimeFrame != TimeFrame.fiveYear);

plot emaFiveYear = MovAvgExponential(price = percentFiveYear, length = 10);
emaFiveYear.SetHiding(TimeFrame != TimeFrame.fiveYear);

AddLabel(ShowFiveYearLabel, "5 Year: " + AsPercent(percentFiveYear), color = Color.UPTICK);
AddLabel(ShowFiveYearLabel, "5 Year EMA: " + AsPercent(emaFiveYear), color = Color.UPTICK);

# 3 Years
def threeYearHigh = Highest(iv, year * 3);
def threeYearLow = Lowest(iv, year * 3);

plot percentThreeYear = (iv - threeYearLow) / (threeYearHigh - threeYearLow);
percentThreeYear.SetHiding(TimeFrame != TimeFrame.ThreeYear);

plot emaThreeYear = MovAvgExponential(price = percentThreeYear, length = 10);
emaThreeYear.SetHiding(TimeFrame != TimeFrame.ThreeYear);

AddLabel(ShowThreeYearLabel, "3 Year: " + AsPercent(percentThreeYear), color = Color.WHITE);
AddLabel(ShowThreeYearLabel, "3 Year EMA: " + AsPercent(emaThreeYear), color = Color.WHITE);

# 1 Year
def oneYearHigh = Highest(iv, year);
def oneYearLow = Lowest(iv, year);

plot percentOneYear = (iv - oneYearLow) / (oneYearHigh - oneYearLow);
percentOneYear.SetHiding(TimeFrame != TimeFrame.OneYear);

plot emaOneYear = MovAvgExponential(price = percentOneYear, length = 10);
emaOneYear.SetHiding(TimeFrame != TimeFrame.OneYear);

AddLabel(ShowOneYearLabel, "1 Year: " + AsPercent(percentOneYear), color = Color.VIOLET);
AddLabel(ShowOneYearLabel, "1 Year EMA: " + AsPercent(emaOneYear), color = Color.VIOLET);

# 6 Months
def sixMonthHigh = Highest(iv, year / 6);
def sixMonthLow = Lowest(iv, year / 6);

plot percentSixMonths = (iv - sixMonthLow) / (sixMonthHigh - sixMonthLow);
percentSixMonths.SetHiding(TimeFrame != TimeFrame.SixMonths);

plot emaSixMonths = MovAvgExponential(price = percentSixMonths, length = 10);
emaSixMonths.SetHiding(TimeFrame != TimeFrame.SixMonths);

AddLabel(ShowSixMonthsLabel, "6 Months: " + AsPercent(percentSixMonths), color = Color.PINK);
AddLabel(ShowSixMonthsLabel, "6 Months EMA: " + AsPercent(emaSixMonths), color = Color.PINK);

# 3 Months
def threeMonthHigh = Highest(iv, year / 3);
def threeMonthLow = Lowest(iv, year / 3);

plot percentThreeMonths = (iv - threeMonthLow) / (threeMonthHigh - threeMonthLow);
percentThreeMonths.SetHiding(TimeFrame != TimeFrame.ThreeMonths);

plot emaThreeMonths = MovAvgExponential(price = percentThreeMonths, length = 10);
emaThreeMonths.SetHiding(TimeFrame != TimeFrame.ThreeMonths);

AddLabel(ShowThreeMonthsLabel, "3 Months: " + AsPercent(percentThreeMonths), color = Color.LIGHT_ORANGE);
AddLabel(ShowThreeMonthsLabel, "3 Months EMA: " + AsPercent(emaThreeMonths), color = Color.LIGHT_ORANGE);

# 1 Month
def oneMonthHigh = Highest(iv, year / 12);
def oneMonthLow = Lowest(iv, year / 12);

plot percentOneMonth = (iv - oneMonthLow) / (oneMonthHigh - oneMonthLow);
percentOneMonth.SetHiding(TimeFrame != TimeFrame.OneMonth);

plot emaOneMonth = MovAvgExponential(price = percentOneMonth, length = 10);
emaOneMonth.SetHiding(TimeFrame != TimeFrame.OneMonth);

AddLabel(ShowOneMonthLabel, "1 Month: " + AsPercent(percentOneMonth), color = Color.LIME);
AddLabel(ShowOneMonthLabel, "1 Month EMA: " + AsPercent(emaOneMonth), color = Color.LIME);

# 10 days.
def tenDayHigh = Highest(iv, 10);
def tenDayLow = Lowest(iv, 10);

plot percentTenDays = (iv - tenDayLow) / (tenDayHigh - tenDayLow);
percentTenDays.SetHiding(TimeFrame != TimeFrame.TenDays);

plot emaTenDays = MovAvgExponential(price = percentTenDays, length = 10);
emaTenDays.SetHiding(TimeFrame != TimeFrame.TenDays);

AddLabel(ShowTenDaysLabel, "10 Days: " + AsPercent(percentTenDays), color = Color.WHITE);
AddLabel(ShowTenDaysLabel, "10 Days EMA: " + AsPercent(emaTenDays), color = Color.WHITE);

# 5 days.
def fiveDayHigh = Highest(iv, 5);
def fiveDayLow = Lowest(iv, 5);

plot percentFiveDays = (iv - fiveDayLow) / (fiveDayHigh - fiveDayLow);
percentFiveDays.SetHiding(TimeFrame != TimeFrame.FiveDays);

plot emaFiveDays = MovAvgExponential(price = percentFiveDays, length = 10);
emaFiveDays.SetHiding(TimeFrame != TimeFrame.FiveDays);

AddLabel(ShowFiveDaysLabel, "5 Days: " + AsPercent(percentFiveDays), color = Color.YELLOW);
AddLabel(ShowFiveDaysLabel, "5 Days EMA: " + AsPercent(emaFiveDays), color = Color.YELLOW);