import { Button } from "./button";
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi"; // Add icons for login/logout

interface AppbarProps {
    user?: {
        name?: string | null;
    };
    onSignin: () => void;
    onSignout: () => void;
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
        <div className="flex justify-between items-center p-4 shadow-md bg-white border-b border-slate-200">
            <div className="flex items-center space-x-2">
                <div className="text-2xl font-semibold text-blue-600 flex items-center">
                    <FiUser className="mr-2 text-blue-600" />
                    PayTM
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {user ? (
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600 font-medium">{user.name}</span>
                        <Button
                            onClick={onSignout}
                            //className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 flex items-center"
                        >
                            <FiLogOut className="mr-1" />
                            Logoout
                        </Button>
                    </div>
                ) : (
                    <Button
                        onClick={onSignin}
                        //className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 flex items-center"
                    >
                        <FiLogIn className="mr-1" />
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
};