interface ISupplierValidator {
    validate(supplier: Supplier): void;
}

class SupplierValidator implements ISupplierValidator {
    validate(supplier: Supplier): void {
        if (!supplier.id || supplier.id <= 0) {
            throw new Error("Invalid ID");
        }
        if (!supplier.name) {
            throw new Error("Name cannot be empty");
        }
        if (!supplier.city) {
            throw new Error("City cannot be empty");
        }
        if (!supplier.state || supplier.state.length !== 2) {
            throw new Error("Invalid state");
        }
        if (!supplier.zip || supplier.zip.length > 10) {
            throw new Error("Invalid zip code");
        }
    }
}

class Supplier {
    private m_id: number;
    private m_name: string;
    private m_address: string | null;
    private m_city: string;
    private m_state: string;
    private m_zip: string;
    private m_updateTimestamp: Date;
    private m_createdDate: Date;

    constructor(
        id: number,
        name: string,
        city: string,
        state: string,
        zip: string,
        address: string | null = null,
        updateTimestamp: Date = new Date(),
        createdDate: Date = new Date(),
        private validator: ISupplierValidator = new SupplierValidator()
    ) {
        this.m_id = id;
        this.m_name = name;
        this.m_address = address;
        this.m_city = city;
        this.m_state = state;
        this.m_zip = zip;
        this.m_updateTimestamp = updateTimestamp;
        this.m_createdDate = createdDate;

        this.validator.validate(this);
    }

    get id(): number {
        return this.m_id;
    }

    set id(value: number) {
        this.m_id = value;
        this.validator.validate(this);
    }

    get name(): string {
        return this.m_name;
    }

    set name(value: string) {
        this.m_name = value;
        this.validator.validate(this);
    }

    get address(): string | null {
        return this.m_address;
    }

    set address(value: string | null) {
        this.m_address = value;
    }

    get city(): string {
        return this.m_city;
    }

    set city(value: string) {
        this.m_city = value;
        this.validator.validate(this);
    }

    get state(): string {
        return this.m_state;
    }

    set state(value: string) {
        this.m_state = value;
        this.validator.validate(this);
    }

    get zip(): string {
        return this.m_zip;
    }

    set zip(value: string) {
        this.m_zip = value;
        this.validator.validate(this);
    }

    get updateTimestamp(): Date {
        return this.m_updateTimestamp;
    }

    set updateTimestamp(value: Date) {
        this.m_updateTimestamp = value;
    }

    get createdDate(): Date {
        return this.m_createdDate;
    }

    set createdDate(value: Date) {
        this.m_createdDate = value;
    }
}
