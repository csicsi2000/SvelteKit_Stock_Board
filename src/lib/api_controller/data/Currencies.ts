// api: https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange
// Documentation: https://fiscaldata.treasury.gov/api-documentation/#what-is-a-dataset

export interface Currencies {
    data:  Datum[];
    meta:  Meta;
    links: Links;
}

export interface Datum {
    record_date:             string;
    country:                 string;
    currency:                string;
    country_currency_desc:   string;
    exchange_rate:           string;
    effective_date:          EffectiveDate;
    src_line_nbr:            string;
    record_fiscal_year:      string;
    record_fiscal_quarter:   string;
    record_calendar_year:    string;
    record_calendar_quarter: string;
    record_calendar_month:   RecordCalendarMonth;
    record_calendar_day:     string;
}

export enum EffectiveDate {
    Date = "DATE",
    EffectiveDate = "Effective Date",
    Null = "null",
    YyyyMmDD = "YYYY-MM-DD",
}

export enum RecordCalendarMonth {
    CalendarMonthNumber = "Calendar Month Number",
    Mm = "MM",
    Month = "MONTH",
    The03 = "03",
}

export interface Links {
    self:  string;
    first: string;
    prev:  null;
    next:  string;
    last:  string;
}

export interface Meta {
    count:         number;
    labels:        Datum;
    dataTypes:     Datum;
    dataFormats:   Datum;
    "total-count": number;
    "total-pages": number;
}
