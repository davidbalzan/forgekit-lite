export type Id = string;

export type Timestamps = {
  createdAt: string;
  updatedAt: string;
};

export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
