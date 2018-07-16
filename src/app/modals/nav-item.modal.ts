export class NavItem {
    constructor(
        public Text: string,
        public Href: string,
    ) {

    }
}

export class NavGroup {

    constructor(
        public NavGroupName: string,
        public NavItems: Array<NavItem>
    ) {

    }
}