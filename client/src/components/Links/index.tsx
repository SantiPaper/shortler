import { Link } from "../Link";
import style from "./style.module.css";
import { Links as typeLinks } from "../../../types/url";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  data: typeLinks[];
  onDelete: (id: string) => void;
  loading: boolean;
  dataStorage: typeLinks[];
};

export const Links = ({ data, onDelete, loading, dataStorage }: Props) => {
  const { user, isLoading } = useAuth0();

  return (
    <>
      {loading ? (
        <h2 className={style.notUrl}>Cargando</h2>
      ) : (
        <div className={style.container}>
          {!isLoading && !user && dataStorage.length === 1 && (
            <p className={style.warn}>
              ¡Al no tener una sesión activa solamente podrás acortar solamente
              1 enlace!
            </p>
          )}
          {(user && data.length !== 0) ||
          (!user && dataStorage.length !== 0) ? (
            <div className={style.container__links}>
              <table cellSpacing={0} className={style.links}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Url acortada</th>
                    <th>Url original</th>
                    <th>Creada</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {user &&
                    data.length !== 0 &&
                    data.map((link) => (
                      <Link
                        link={link.original_url}
                        name={link.name}
                        key={link.short_url}
                        shorter={link.short_url}
                        createAt={link.createdAt}
                        onDelete={onDelete}
                      />
                    ))}
                  {!user &&
                    dataStorage.map((link) => (
                      <Link
                        link={link.original_url}
                        name={link.name}
                        key={link.short_url}
                        shorter={link.short_url}
                        createAt={link.createdAt}
                        onDelete={onDelete}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h2 className={style.notUrl}>No tienes urls acortadas</h2>
          )}
        </div>
      )}
    </>
  );
};
