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

def v = Volume();

# 5 Years
def fiveYearHigh = Highest(v, year * 5);
def fiveYearLow = Lowest(v, year * 5);

plot percentFiveYear = (v - fiveYearLow) / (fiveYearHigh - fiveYearLow);
percentFiveYear.SetHiding(TimeFrame != TimeFrame.fiveYear);

plot emaFiveYear = MovAvgExponential(price = percentFiveYear, length = 10);
emaFiveYear.SetHiding(TimeFrame != TimeFrame.fiveYear);

AddLabel(ShowFiveYearLabel, "5 Year: " + AsPercent(percentFiveYear), color = Color.UPTICK);
AddLabel(ShowFiveYearLabel, "5 Year EMA: " + AsPercent(emaFiveYear), color = Color.UPTICK);

# 3 Years
def threeYearHigh = Highest(v, year * 3);
def threeYearLow = Lowest(v, year * 3);

plot percentThreeYear = (v - threeYearLow) / (threeYearHigh - threeYearLow);
percentThreeYear.SetHiding(TimeFrame != TimeFrame.ThreeYear);

plot emaThreeYear = MovAvgExponential(price = percentThreeYear, length = 10);
emaThreeYear.SetHiding(TimeFrame != TimeFrame.ThreeYear);

AddLabel(ShowThreeYearLabel, "3 Year: " + AsPercent(percentThreeYear), color = Color.WHITE);
AddLabel(ShowThreeYearLabel, "3 Year EMA: " + AsPercent(emaThreeYear), color = Color.WHITE);

# 1 Year
def oneYearHigh = Highest(v, year);
def oneYearLow = Lowest(v, year);

plot percentOneYear = (v - oneYearLow) / (oneYearHigh - oneYearLow);
percentOneYear.SetHiding(TimeFrame != TimeFrame.OneYear);

plot emaOneYear = MovAvgExponential(price = percentOneYear, length = 10);
emaOneYear.SetHiding(TimeFrame != TimeFrame.OneYear);

AddLabel(ShowOneYearLabel, "1 Year: " + AsPercent(percentOneYear), color = Color.VIOLET);
AddLabel(ShowOneYearLabel, "1 Year EMA: " + AsPercent(emaOneYear), color = Color.VIOLET);

# 6 Months
def sixMonthHigh = Highest(v, year / 6);
def sixMonthLow = Lowest(v, year / 6);

plot percentSixMonths = (v - sixMonthLow) / (sixMonthHigh - sixMonthLow);
percentSixMonths.SetHiding(TimeFrame != TimeFrame.SixMonths);

plot emaSixMonths = MovAvgExponential(price = percentSixMonths, length = 10);
emaSixMonths.SetHiding(TimeFrame != TimeFrame.SixMonths);

AddLabel(ShowSixMonthsLabel, "6 Months: " + AsPercent(percentSixMonths), color = Color.PINK);
AddLabel(ShowSixMonthsLabel, "6 Months EMA: " + AsPercent(emaSixMonths), color = Color.PINK);

# 3 Months
def threeMonthHigh = Highest(v, year / 3);
def threeMonthLow = Lowest(v, year / 3);

plot percentThreeMonths = (v - threeMonthLow) / (threeMonthHigh - threeMonthLow);
percentThreeMonths.SetHiding(TimeFrame != TimeFrame.ThreeMonths);

plot emaThreeMonths = MovAvgExponential(price = percentThreeMonths, length = 10);
emaThreeMonths.SetHiding(TimeFrame != TimeFrame.ThreeMonths);

AddLabel(ShowThreeMonthsLabel, "3 Months: " + AsPercent(percentThreeMonths), color = Color.LIGHT_ORANGE);
AddLabel(ShowThreeMonthsLabel, "3 Months EMA: " + AsPercent(emaThreeMonths), color = Color.LIGHT_ORANGE);

# 1 Month
def oneMonthHigh = Highest(v, year / 12);
def oneMonthLow = Lowest(v, year / 12);

plot percentOneMonth = (v - oneMonthLow) / (oneMonthHigh - oneMonthLow);
percentOneMonth.SetHiding(TimeFrame != TimeFrame.OneMonth);

plot emaOneMonth = MovAvgExponential(price = percentOneMonth, length = 10);
emaOneMonth.SetHiding(TimeFrame != TimeFrame.OneMonth);

AddLabel(ShowOneMonthLabel, "1 Month: " + AsPercent(percentOneMonth), color = Color.LIME);
AddLabel(ShowOneMonthLabel, "1 Month EMA: " + AsPercent(emaOneMonth), color = Color.LIME);

# 10 days.
def tenDayHigh = Highest(v, 10);
def tenDayLow = Lowest(v, 10);

plot percentTenDays = (v - tenDayLow) / (tenDayHigh - tenDayLow);
percentTenDays.SetHiding(TimeFrame != TimeFrame.TenDays);

plot emaTenDays = MovAvgExponential(price = percentTenDays, length = 10);
emaTenDays.SetHiding(TimeFrame != TimeFrame.TenDays);

AddLabel(ShowTenDaysLabel, "10 Days: " + AsPercent(percentTenDays), color = Color.WHITE);
AddLabel(ShowTenDaysLabel, "10 Days EMA: " + AsPercent(emaTenDays), color = Color.WHITE);

# 5 days.
def fiveDayHigh = Highest(v, 5);
def fiveDayLow = Lowest(v, 5);

plot percentFiveDays = (v - fiveDayLow) / (fiveDayHigh - fiveDayLow);
percentFiveDays.SetHiding(TimeFrame != TimeFrame.FiveDays);

plot emaFiveDays = MovAvgExponential(price = percentFiveDays, length = 10);
emaFiveDays.SetHiding(TimeFrame != TimeFrame.FiveDays);

AddLabel(ShowFiveDaysLabel, "5 Days: " + AsPercent(percentFiveDays), color = Color.YELLOW);
AddLabel(ShowFiveDaysLabel, "5 Days EMA: " + AsPercent(emaFiveDays), color = Color.YELLOW);