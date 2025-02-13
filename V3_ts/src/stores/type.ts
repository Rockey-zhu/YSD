    export interface ChinaTotal {
        dead: number;
        heal: number;
        showLocalConfirm: number;
        localConfirmH5: number;
        local_acc_confirm: number;
        showlocalinfeciton: number;
        localConfirm: number;
        noInfectH5: number;
        confirm: number;
        nowSevere: number;
        importedCase: number;
        noInfect: number;
        nowConfirm: number;
        suspect: number;
    }

    export interface ChinaAdd {
        suspect: number;
        importedCase: number;
        noInfect: number;
        localConfirm: number;
        localConfirmH5: number;
        heal: number;
        dead: number;
        nowConfirm: number;
        nowSevere: number;
        noInfectH5: number;
        confirm: number;
    }

    export interface ShowAddSwitch {
        nowConfirm: boolean;
        nowSevere: boolean;
        importedCase: boolean;
        noInfect: boolean;
        localinfeciton: boolean;
        all: boolean;
        confirm: boolean;
        suspect: boolean;
        dead: boolean;
        heal: boolean;
        localConfirm: boolean;
    }

    export interface Today {
        confirm: number;
        isUpdated: boolean;
    }

    export interface Total {
        heal: number;
        showHeal: boolean;
        wzz: number;
        provinceLocalConfirm: number;
        nowConfirm: number;
        confirm: number;
        dead: number;
        showRate: boolean;
    }

    export interface Today2 {
        confirmCuts: number;
        isUpdated: boolean;
        tip: string;
        wzz_add: number;
        confirm: number;
    }

    export interface Total2 {
        dead: number;
        showRate: boolean;
        heal: number;
        showHeal: boolean;
        wzz: number;
        provinceLocalConfirm: number;
        nowConfirm: number;
        confirm: number;
    }

    export interface Today3 {
        confirmCuts: number;
        isUpdated: boolean;
        confirm: number;
    }

    export interface Total3 {
        heal: number;
        showHeal: boolean;
        wzz: number;
        provinceLocalConfirm: number;
        nowConfirm: number;
        confirm: number;
        dead: number;
        showRate: boolean;
        grade: string;
    }

    export interface Child2 {
        name: string;
        today: Today3;
        total: Total3;
    }

    export interface Child {
        name: string;
        today: Today2;
        total: Total2;
        children: Child2[];
    }

    export interface AreaTree {
        name: string;
        today: Today;
        total: Total;
        children: Child[];
    }

    export interface Diseaseh5Shelf {
        lastUpdateTime: string;
        chinaTotal: ChinaTotal;
        chinaAdd: ChinaAdd;
        isShowAdd: boolean;
        showAddSwitch: ShowAddSwitch;
        areaTree: AreaTree[];
    }

    export interface StatisGradeCityDetail {
        heal: number;
        date: string;
        province: string;
        city: string;
        nowConfirm: number;
        dead: number;
        syear: number;
        confirmAdd: number;
        confirm: number;
        grade: string;
        sdate: string;
    }

    export interface Data {
        diseaseh5Shelf: Diseaseh5Shelf;
        statisGradeCityDetail: StatisGradeCityDetail[];
    }

    export interface RootObject {
        ret: number;
        info: string;
        data: Data;
    }



