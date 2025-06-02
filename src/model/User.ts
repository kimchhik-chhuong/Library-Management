export abstract class User {
  abstract getId(): number;
  abstract getName(): string;
  abstract login(email: string, password: string): boolean;
  abstract logout(): void;
  abstract updateProfile(info: object): void;
}