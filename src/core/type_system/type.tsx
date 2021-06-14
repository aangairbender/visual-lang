class Type {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class PrimitiveType extends Type {}

class TraitType extends Type {
    members: TypeMember[];

    constructor(name: string, members: TypeMember[]) {
        super(name);
        this.members = members;
    }
}

class ClassType extends Type {
    ancestor: ClassType | null;
    members: TypeMember[];

    constructor(name: string, ancestor: ClassType | null, members: TypeMember[]) {
        super(name);
        this.ancestor = ancestor;
        this.members = members;
    }
}

class EnumType extends Type {
    variants: EnumVariant[];

    constructor(name: string, variants: EnumVariant[]) {
        super(name);
        this.variants = variants;
    }
}

class Module {
    name: string;
    types: Type[];
    subModules: Module[];
    traitImplementations: TraitImplementation[];

    constructor(name: string, subModules: Module[], types: Type[], traitImplementations: TraitImplementation[]) {
        this.name = name;
        this.subModules = subModules;
        this.types = types;
        this.traitImplementations = traitImplementations;
    }
}

interface EnumVariant {
    name: string;
    value?: TypedValue;
}

interface TypedValue {
    value: any;
    type: Type;
}

interface TraitImplementation {

}

interface TypeMember {
    name: string;
    type: Type;
}

export {
    Type,
    PrimitiveType,
    Module,
};