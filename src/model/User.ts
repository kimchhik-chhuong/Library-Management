export abstract class User {
  id: string;
  fullName: string;

  constructor(id: string, fullName: string) {
    this.id = id;
    this.fullName = fullName;
  }
  abstract getId(): number;
  abstract getName(): string;
  abstract login(email: string, password: string): boolean;
  abstract logout(): void;
  abstract updateProfile(info: object): void;
}