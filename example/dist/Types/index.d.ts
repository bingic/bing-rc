import { CSSProperties, ReactNode } from 'react';
export type Omit<K, V> = Pick<K, Exclude<keyof K, V>>;
export interface StandardFunctionProps {
    /** Unique identifier for getting an element */
    id?: string;
    /** Useful for setting common attributes like width or height */
    style?: CSSProperties;
    /** ID for Integration Tests */
    testID?: string;
    /** Children */
    children?: ReactNode;
    /** Useful for overriding styles of the component and its constituent elements */
    className?: string;
}
export type ValidationFunction = (input: string) => string | null;
export type RenderLinkElement = (className: string) => JSX.Element;
export declare enum ComponentColor {
    Default = "default",
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Colorless = "colorless"
}
export declare enum ComponentSize {
    ExtraSmall = "xs",
    Small = "sm",
    Medium = "md",
    Large = "lg"
}
export declare enum ComponentStatus {
    Default = "default",
    Loading = "loading",
    Error = "error",
    Valid = "valid",
    Disabled = "disabled"
}
export declare enum ComponentOrientation {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export interface Color {
    hex: string;
    name: string;
}
export interface Gradient {
    start: InfluxColors;
    stop: InfluxColors;
}
export declare enum Gradients {
    BeijingEclipse = "BeijingEclipse",
    DistantNebula = "DistantNebula",
    SpirulinaSmoothie = "SpirulinaSmoothie",
    CephalopodInk = "CephalopodInk",
    DarkChocolate = "DarkChocolate",
    LASunset = "LASunset",
    PolarExpress = "PolarExpress",
    RebelAlliance = "RebelAlliance",
    JungleDusk = "JungleDusk",
    SavannaHeat = "SavannaHeat",
    DocScott = "DocScott",
    GundamPilot = "GundamPilot",
    TropicalTourist = "TropicalTourist",
    JalapenoTaco = "JalapenoTaco",
    FuyuPersimmon = "FuyuPersimmon",
    DesertFestival = "DesertFestival",
    MiyazakiSky = "MiyazakiSky",
    GarageBand = "GarageBand",
    MangoGrove = "MangoGrove",
    ScotchBonnet = "ScotchBonnet",
    BrooklynCowboy = "BrooklynCowboy",
    PastelGothic = "PastelGothic",
    LowDifficulty = "LowDifficulty",
    CitrusSodapop = "CitrusSodapop",
    CaliforniaCampfire = "CaliforniaCampfire",
    SynthPop = "SynthPop",
    CottonCandy = "CottonCandy",
    HotelBreakfast = "HotelBreakfast",
    CandyApple = "CandyApple",
    JustPeachy = "JustPeachy",
    MagicCarpet = "MagicCarpet",
    CruisingAltitude = "CruisingAltitude",
    CoconutLime = "CoconutLime",
    MillennialAvocado = "MillennialAvocado",
    GoldenHour = "GoldenHour",
    PastryCafe = "PastryCafe",
    KawaiiDesu = "KawaiiDesu",
    RobotLogic = "RobotLogic",
    MintyFresh = "MintyFresh",
    SimpleCream = "SimpleCream",
    WarpSpeed = "WarpSpeed",
    PowerStone = "PowerStone",
    MilkyWay = "MilkyWay",
    LazyAfternoon = "LazyAfternoon",
    NineteenEightyFour = "NineteenEightyFour",
    RadioactiveWarning = "RadioactiveWarning",
    LostGalaxy = "LostGalaxy",
    GrapeSoda = "GrapeSoda",
    LavenderLatte = "LavenderLatte",
    OminousFog = "OminousFog",
    DefaultLight = "DefaultLight",
    Default = "Default",
    DefaultDark = "DefaultDark",
    PrimaryLight = "PrimaryLight",
    Info = "Info",
    PrimaryDark = "PrimaryDark",
    SecondaryLight = "SecondaryLight",
    Secondary = "Secondary",
    SecondaryDark = "SecondaryDark",
    SuccessLight = "SuccessLight",
    Success = "Success",
    SuccessDark = "SuccessDark",
    WarningLight = "WarningLight",
    Warning = "Warning",
    WarningDark = "WarningDark",
    DangerLight = "DangerLight",
    Danger = "Danger",
    DangerDark = "DangerDark"
}
export declare enum DropdownMenuTheme {
    Amethyst = "amethyst",
    Malachite = "malachite",
    Sapphire = "sapphire",
    Onyx = "onyx",
    None = "none"
}
export interface DropdownMenuScrollbarColors {
    thumbStartColor: InfluxColors;
    thumbStopColor: InfluxColors;
}
export declare enum DropdownItemType {
    Dot = "dot",
    Checkbox = "checkbox",
    None = "none"
}
export declare enum Direction {
    Left = "left",
    Right = "right",
    None = "none"
}
export declare enum ButtonShape {
    Default = "none",
    Square = "square",
    StretchToFit = "stretch"
}
export declare enum ButtonType {
    Button = "button",
    Submit = "submit"
}
export declare enum InfluxColors {
    Grey5 = "#07070e",
    Grey15 = "#1a1a2a",
    Grey25 = "#333346",
    Grey35 = "#4d4d60",
    Grey45 = "#68687b",
    Grey55 = "#828294",
    Grey65 = "#9e9ead",
    Grey75 = "#b9b9c5",
    Grey85 = "#d5d5dd",
    Grey95 = "#f1f1f3",
    White = "#ffffff",
    Obsidian = "#07070e",
    Raven = "#07070e",
    Kevlar = "#07070e",
    Castle = "#1a1a2a",
    Onyx = "#1a1a2a",
    Pepper = "#333346",
    Smoke = "#333346",
    Graphite = "#4d4d60",
    Storm = "#68687b",
    Mountain = "#68687b",
    Wolf = "#828294",
    Sidewalk = "#9e9ead",
    Forge = "#9e9ead",
    Mist = "#b9b9c5",
    Chromium = "#b9b9c5",
    Platinum = "#d5d5dd",
    Pearl = "#d5d5dd",
    Whisper = "#f1f1f3",
    Cloud = "#f1f1f3",
    Ghost = "#f1f1f3",
    Abyss = "#120653",
    Sapphire = "#0b3a8d",
    Ocean = "#066fc5",
    Pool = "#00a3ff",
    Laser = "#00C9FF",
    Hydrogen = "#6BDFFF",
    Neutrino = "#BEF0FF",
    Yeti = "#F0FCFF",
    Shadow = "#2b007e",
    Void = "#5c10a0",
    Amethyst = "#8e1fc3",
    Star = "#be2ee4",
    Comet = "#ce58eb",
    Potassium = "#dd84f1",
    Moonstone = "#ebadf8",
    Twilight = "#fad9ff",
    Gypsy = "#003e34",
    Emerald = "#006f49",
    Viridian = "#009f5f",
    Rainforest = "#34bb55",
    Honeydew = "#67d74e",
    Krypton = "#9bf445",
    Wasabi = "#c6f98e",
    Mint = "#f3ffd6",
    Oak = "#3F241F",
    Topaz = "#E85B1C",
    Tiger = "#F48D38",
    Pineapple = "#FFB94A",
    Thunder = "#FFD255",
    Sulfur = "#FFE480",
    Daisy = "#FFF6B8",
    Banana = "#FFFDDE",
    Basalt = "#2F1F29",
    Ruby = "#BF3D5E",
    Fire = "#DC4E58",
    Curacao = "#F95F53",
    Dreamsicle = "#FF8564",
    Tungsten = "#FFB6A0",
    Marmelade = "#FFDCCF",
    Flan = "#FFF7F4",
    Chartreuse = "#D6F622",
    DeepPurple = "#13002D",
    Magenta = "#BF2FE5",
    Galaxy = "#9394FF",
    Pulsar = "#513CC6",
    CetaceanBlue = "#020A47",
    DogwoodRose = "#D30971",
    PurpleX = "#9B2AFF"
}
export declare enum IconFont {
    AddCell_New = "AddCell_New",
    AlertTriangle = "AlertTriangle",
    Annotate_New = "Annotate_New",
    ArrowDown_New = "ArrowDown_New",
    ArrowLeft_New = "ArrowLeft_New",
    ArrowRight_New = "ArrowRight_New",
    BarChart_New = "BarChart_New",
    Bell = "Bell",
    Bill = "Bill",
    BookCode = "BookCode",
    BookOutline = "BookOutline",
    Braces = "Braces",
    BucketSolid = "BucketSolid",
    Calendar = "Calendar",
    CaretDown_New = "CaretDown_New",
    CaretLeft_New = "CaretLeft_New",
    CaretOutlineRight = "CaretOutlineRight",
    CaretRight_New = "CaretRight_New",
    CaretUp_New = "CaretUp_New",
    Chat = "Chat",
    CheckMark_New = "Checkmark_New",
    DoubleCaretVertical = "DoubleCaretVertical",
    CircleThick = "CircleThick",
    Clipboard_New = "Clipboard_New",
    Clock_New = "Clock_New",
    Cloud = "Cloud",
    CogOutline_New = "CogOutline_New",
    CogSolid_New = "CogSolid_New",
    CollapseLeft = "CollapseLeft",
    CollapseRight = "CollapseRight",
    CopperCoin = "Coppercoin",
    CrownSolid_New = "CrownSolid_New",
    Cube = "Cube",
    CuboSolid = "CuboSolid",
    CuboUniform = "Cubouniform",
    CurrencyDollar = "CurrencyDollar",
    Darkmode_New = "Darkmode_New",
    DashH = "DashH",
    Download_New = "Download_New",
    Duplicate_New = "Duplicate_New",
    ExpandB = "ExpandB",
    Export_New = "Export_New",
    EyeClosed = "EyeClosed",
    EyeOpen = "EyeOpen",
    Flask = "Flask",
    FolderOpen = "FolderOpen",
    FunnelSolid = "FunnelSolid",
    GraphLine_New = "GraphLine_New",
    Group = "Group",
    History = "History",
    Info_New = "Info_New",
    Install = "Install",
    Layers = "Layers",
    Lightmode_New = "Lightmode_New",
    Link = "Link",
    Lock = "Lock",
    Logout = "Logout",
    More = "More",
    OrganizationChart = "OrganizationChart",
    Pause = "Pause",
    Pencil = "Pencil",
    PieChart = "PieChart",
    Play = "Play",
    Plus_New = "Plus_New",
    QuestionMark = "QuestionMark",
    QuestionMark_Outline = "QuestionMark_Outline",
    Refresh_New = "Refresh_New",
    Remove_New = "Remove_New",
    Save = "Save",
    SaveOutline = "SaveOutline",
    Search_New = "Search_New",
    Share = "Share",
    Shield = "Shield",
    SidebarClose = "SidebarClose",
    SidebarOpen = "SidebarOpen",
    Star = "Star",
    StarSmile = "StarSmile",
    Subscribe = "Subscribe",
    Subtract = "Subtract",
    Switch_New = "Switch_New",
    Sync = "Sync",
    Timer = "Timer",
    Text_New = "Text_New",
    Trash_New = "Trash_New",
    Undo = "Undo",
    Upload_New = "Upload_New",
    Upload_Outline = "Upload_Outline",
    User = "User",
    Zap = "Zap"
}
export declare enum LogoAuxiliaryText {
    None = "None",
    Cloud = "Cloud",
    Enterprise = "Enterprise",
    OpenSource = "OpenSource"
}
export declare enum LogoBaseText {
    None = "None",
    InfluxData = "InfluxData",
    InfluxDb = "InfluxDb",
    Telegraf = "Telegraf"
}
export declare enum LogoMarks {
    Kubo = "Kubo",
    KuboOld = "KuboOld"
}
export declare enum LogoSymbols {
    None = "None",
    Trademark = "Trademark",
    Registered = "Registered"
}
export declare enum Columns {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12
}
export declare enum Sort {
    Descending = "desc",
    Ascending = "asc",
    None = "none"
}
export declare enum Alignment {
    Left = "left",
    Center = "center",
    Right = "right"
}
export declare enum VerticalAlignment {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom"
}
export declare enum JustifyContent {
    FlexStart = "flex-start",
    Center = "center",
    FlexEnd = "flex-end",
    SpaceBetween = "space-between",
    SpaceAround = "space-around"
}
export declare enum AlignItems {
    FlexStart = "flex-start",
    Center = "center",
    FlexEnd = "flex-end",
    Stretch = "stretch"
}
export declare enum FlexDirection {
    Row = "row",
    RowReverse = "row-reverse",
    Column = "column",
    ColumnReverse = "column-reverse"
}
export declare enum RemoteDataState {
    NotStarted = "NotStarted",
    Loading = "Loading",
    Done = "Done",
    Error = "Error"
}
export declare enum AutoComplete {
    On = "on",
    Off = "off"
}
export declare enum Orientation {
    Vertical = "vertical",
    Horizontal = "horizontal"
}
export declare enum BorderType {
    None = "none",
    Horizontal = "horizontal",
    Vertical = "vertical",
    Both = "both",
    All = "all"
}
export interface TimeRange {
    lower: string;
    upper?: string | null;
    seconds?: number;
    format?: string;
    label?: string;
    duration?: string;
}
export declare enum InputType {
    Text = "text",
    Number = "number",
    Password = "password",
    Email = "email",
    Checkbox = "checkbox",
    Range = "range"
}
export declare enum InputToggleType {
    Checkbox = "checkbox",
    Radio = "radio"
}
export declare enum AutoInputMode {
    Auto = "auto",
    Custom = "custom"
}
export declare enum PopoverInteraction {
    Hover = "hover",
    Click = "click",
    None = "none"
}
export declare enum PopoverPosition {
    Above = "above",
    Below = "below",
    ToTheLeft = "to-left",
    ToTheRight = "to-right",
    ToTheRightTop = "to-right-top"
}
export declare enum Appearance {
    Solid = "solid",
    Outline = "outline"
}
export declare enum EncType {
    Application = "application/x-www-form-urlencoded",
    Multipart = "multipart/form-data",
    Text = "text/plain"
}
export declare enum Method {
    Post = "post",
    Get = "get",
    Dialog = "dialog"
}
export declare enum Wrap {
    Hard = "hard",
    Soft = "soft",
    Off = "off"
}
export interface Coordinates {
    x: number;
    y: number;
}
export declare enum LinkTarget {
    Blank = "_blank",
    Parent = "_parent",
    Self = "_self",
    Top = "_top"
}
export declare enum LinkRel {
    Alternate = "alternate",
    Author = "author",
    Bookmark = "bookmark",
    External = "external",
    Help = "help",
    License = "license",
    Next = "next",
    NoFollow = "nofollow",
    NoOpener = "noopener",
    NoReferrer = "noreferrer",
    Prev = "prev",
    Search = "search",
    Tag = "tag"
}
export declare enum Typeface {
    RobotoMono = "Roboto Mono",
    ProximaNova = "Proxima Nova"
}
export declare enum HeadingElement {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    Span = "span",
    Div = "div",
    P = "p"
}
export declare enum FontWeight {
    Light = "300",
    Regular = "400",
    Medium = "500",
    Bold = "700",
    Black = "900"
}
export declare enum Breakpoint {
    None = 0,
    Small,
    Medium,
    Large
}
